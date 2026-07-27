import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Declarative Action Assignment for "Get from Innovator" button on diagrams list
// Model: "List" (c3547169534723003eddddeeff7b126c)
// Client Action: "Update the content" (8072359a5333330063ddddeeff7b1291) - refreshes list after server script
export const getFromInnovatorAction = Record({
    $id: Now.ID['get_from_innovator_action'],
    table: 'sys_declarative_action_assignment',
    data: {
        table: 'x_1937158_myarchim_oslc_diagram',
        model: 'c3547169534723003eddddeeff7b126c',
        label: 'Get from Innovator',
        declarative_action_type: 'server_script',
        client_action: '8072359a5333330063ddddeeff7b1291',
        server_script: `var importer = new x_1937158_archim_0.InoOSLCImporter();
var count = importer.importDiagrams();
gs.addInfoMessage('Successfully imported ' + count + ' diagrams from MID Innovator');`,
        active: true,
        button_type: 'primary',
        record_selection_required: false,
        order: 10,
        tooltip: 'Query diagrams from OSLC Consumer for MID Innovator and import them',
    },
})
