import { UiAction, Record } from '@servicenow/sdk/core'

// "Get from Innovator" list banner button on diagrams list
// Classic UI: uses sys_ui_action (list banner button)
// Workspace: uses sys_declarative_action_assignment (list header action)

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
    ga.addParam('sysparm_name', 'importDiagramsAjax');
    ga.getXMLAnswer(function(answer) {
        var result = JSON.parse(answer);
        g_form.addInfoMessage('Successfully imported ' + result.count + ' diagrams from MID Innovator');
    });
}`,
    },
    hint: 'Query diagrams from OSLC Consumer for MID Innovator and import them',
    order: 10,
    script: `function importFromInnovator() {
    var ga = new GlideAjax('x_2121140_archimat.InoOSLCImporter');
    ga.addParam('sysparm_name', 'importDiagramsAjax');
    ga.getXMLAnswer(function(answer) {
        var result = JSON.parse(answer);
        var listId = gel('sys_target').value;
        GlideList2.get(listId).refresh();
        g_form.addInfoMessage('Successfully imported ' + result.count + ' diagrams from MID Innovator');
    });
}`,
})

// --- Workspace Declarative Action (for configurable workspace list header) ---
// Following the pattern of working client_script declarative actions:
// - No payload definition needed
// - action_type and specificity are REQUIRED
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
    ga.addParam('sysparm_name', 'importDiagramsAjax');
    ga.getXMLAnswer(function(answer) {
        var result = JSON.parse(answer);
        window.location.reload();
    });
}`,
        tooltip: 'Query diagrams from OSLC Consumer for MID Innovator and import them',
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
