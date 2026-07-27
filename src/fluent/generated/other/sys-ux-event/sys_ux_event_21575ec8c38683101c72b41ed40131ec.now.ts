import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['21575ec8c38683101c72b41ed40131ec'],
    table: 'sys_ux_event',
    data: {
        event_name: 'MODAL_SELECTED_RELAY_6457dac8c38683101c72b41ed40131d0',
        label: 'Toggle modal relay',
        props: `[
    {
        "fieldType": "string",
        "interfaceApiName": "global.modal",
        "label": "Modal",
        "name": "modalId",
        "valueType": "string"
    },
    {
        "fieldType": "boolean",
        "label": "Show Modal",
        "name": "showModal",
        "valueType": "string"
    },
    {
        "fieldType": "json",
        "label": "Modal display options",
        "name": "displayOptions",
        "valueType": "string"
    }
]`,
        schema_version: '1.0.0',
    },
})
