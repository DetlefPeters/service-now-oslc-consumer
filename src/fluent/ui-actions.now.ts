import { UiAction } from '@servicenow/sdk/core'

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
            title: 'Select Innovator model source',
            fields: fields,
            size: 'sm',
            confirmTitle: 'Import'
        }).then(function(fieldValues) {
            var selectedProviderId = fieldValues.updatedFields[0].value;
//            var ga2 = new GlideAjax('x_2121140_archimat.InoOSLCImporter');
//            ga2.addParam('sysparm_name', 'importDiagramsAjax');
//            ga2.addParam('sysparm_provider_id', selectedProviderId);
//            ga2.getXMLAnswer(function(importAnswer) {
//                var result = JSON.parse(importAnswer);
//                g_form.addInfoMessage('Successfully imported ' + result.count + ' diagrams (Provider ID: ' + result.provider_id + ')');
//            });
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
        var dialog = new GlideModal();
        dialog.setTitle('Select Innovator model for Import');
        dialog.setBody(html);
//        dialog.setPreference('onSubmit', function() {
//            var selectedId = document.getElementById('provider_select').value;
//            var ga2 = new GlideAjax('x_2121140_archimat.InoOSLCImporter');
//            ga2.addParam('sysparm_name', 'importDiagramsAjax');
//            ga2.addParam('sysparm_provider_id', selectedId);
//            ga2.getXMLAnswer(function(importAnswer) {
//                var result = JSON.parse(importAnswer);
//               var listId = gel('sys_target').value;
//                GlideList2.get(listId).refresh();
//            });
//        });
        dialog.render();
    });
}`,
})
