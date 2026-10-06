import { UiAction, Record } from '@servicenow/sdk/core'

// "Get from Innovator" dropdown button on diagrams list
// Shows a modal with providers from x_2121140_archimat_model_provider table.
// Selecting a provider passes its Provider ID to the import function.

// --- Classic UI Action (for platform list views) ---
UiAction({
    $id: Now.ID['get_from_innovator_action'],
    table: 'x_2121140_archimat_diagram',
    name: 'Get from Innovator',
    actionName: 'get_from_innovator',
    showInsert: true,
    showUpdate: true,
    showMultipleUpdate: true,
    client: {
        isClient: true,
        isUi11Compatible: true,
        isUi16Compatible: true,
        onClick: 'importFromInnovator()',
    },
    list: {
        showBannerButton: true,
        showButton: true,
        style: 'primary',
    },
    workspace: {
        isConfigurableWorkspace: true,
        clientScriptV2: `function onClick(g_form) {
    var ga = new GlideAjax('x_2121140_archimat.InoOSLCImporter');
    ga.addParam('sysparm_name', 'getProviders');
    ga.getXMLAnswer(function(answer) {
        var providers = JSON.parse(answer);
        if (!providers || providers.length === 0) {
            g_form.addErrorMessage('No model providers found. Please add providers first.');
            return;
        }
        var fields = [{
            type: 'select',
            name: 'provider',
            label: 'Select Provider',
            mandatory: true,
            options: providers.map(function(p) {
                return { value: p.provider_id, label: p.name };
            })
        }];
        g_modal.showFields({
            title: 'Get from Innovator',
            fields: fields,
            size: 'sm',
            confirmTitle: 'Import'
        }).then(function(fieldValues) {
            var selectedProviderId = fieldValues.updatedFields[0].value;
            var ga2 = new GlideAjax('x_2121140_archimat.InoOSLCImporter');
            ga2.addParam('sysparm_name', 'importDiagramsAjax');
            ga2.addParam('sysparm_provider_id', selectedProviderId);
            ga2.getXMLAnswer(function(importAnswer) {
                var result = JSON.parse(importAnswer);
                g_form.addInfoMessage('Successfully imported ' + result.count + ' diagrams (Provider ID: ' + result.provider_id + ')');
            });
        });
    });
}`,
    },
    hint: 'Select a model provider and import diagrams from MID Innovator via OSLC',
    order: 10,
    script: `function importFromInnovator() {
    var ga = new GlideAjax('x_2121140_archimat.InoOSLCImporter');
    ga.addParam('sysparm_name', 'getProviders');
    ga.getXMLAnswer(function(answer) {
        var providers = JSON.parse(answer);
        if (!providers || providers.length === 0) {
            alert('No model providers found. Please add providers first.');
            return;
        }
        // Build a simple selection dialog for classic UI
        var html = '<select id="provider_select" style="width:100%;padding:4px;">';
        for (var i = 0; i < providers.length; i++) {
            html += '<option value="' + providers[i].provider_id + '">' + providers[i].name + '</option>';
        }
        html += '</select>';
        var dialog = new GlideDialogWindow('glide_confirm_basic');
        dialog.setTitle('Get from Innovator');
        dialog.setBody(html);
        dialog.setPreference('onPromptComplete', function() {
            var selectedId = document.getElementById('provider_select').value;
            var ga2 = new GlideAjax('x_2121140_archimat.InoOSLCImporter');
            ga2.addParam('sysparm_name', 'importDiagramsAjax');
            ga2.addParam('sysparm_provider_id', selectedId);
            ga2.getXMLAnswer(function(importAnswer) {
                var result = JSON.parse(importAnswer);
                var listId = gel('sys_target').value;
                GlideList2.get(listId).refresh();
            });
        });
        dialog.render();
    });
}`,
})

// --- Workspace Declarative Action (for configurable workspace list header) ---
Record({
    $id: Now.ID['get_from_innovator_ws_action'],
    table: 'sys_declarative_action_assignment',
    data: {
        action_name: 'x_2121140_archimat_get_from_innovator',
        label: 'Get from Innovator',
        model: 'c3547169534723003eddddeeff7b126c', // list header action model
        table: 'x_2121140_archimat_diagram',
        button_type: 'primary',
        declarative_action_type: 'client_script',
        action_type: 'type',
        specificity: 11,
        client_script: `function onClick() {
    var ga = new GlideAjax('x_2121140_archimat.InoOSLCImporter');
    ga.addParam('sysparm_name', 'getProviders');
    ga.getXMLAnswer(function(answer) {
        var providers = JSON.parse(answer);
        if (!providers || providers.length === 0) {
            g_form.addErrorMessage('No model providers found. Please add providers first.');
            return;
        }
        var fields = [{
            type: 'select',
            name: 'provider',
            label: 'Select Provider',
            mandatory: true,
            options: providers.map(function(p) {
                return { value: p.provider_id, label: p.name };
            })
        }];
        g_modal.showFields({
            title: 'Get from Innovator',
            fields: fields,
            size: 'sm',
            confirmTitle: 'Import'
        }).then(function(fieldValues) {
            var selectedProviderId = fieldValues.updatedFields[0].value;
            var ga2 = new GlideAjax('x_2121140_archimat.InoOSLCImporter');
            ga2.addParam('sysparm_name', 'importDiagramsAjax');
            ga2.addParam('sysparm_provider_id', selectedProviderId);
            ga2.getXMLAnswer(function(importAnswer) {
                var result = JSON.parse(importAnswer);
                window.location.reload();
            });
        });
    });
}`,
        tooltip: 'Select a model provider and import diagrams from MID Innovator',
        order: 100,
        active: true,
        enabled: true,
        record_selection_required: false,
        group_by: false,
        write_access: false,
        read_access: false,
        create_access: false,
        delete_access: false,
        confirmation_required: false,
        requires_value: false,
        field_type: 'glide_date',
        animate_icon: false,
        form_fields_required: false,
        experience_restricted: false,
        enable_dynamic_evaluation: false,
        client_action: '',
        interaction: '',
    },
})
