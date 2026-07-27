import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['2cc0e8ebc3f543501c72b41ed401310d'],
    table: 'sys_ux_event',
    data: {
        event_name: 'MODAL_SELECTED_RELAY_10c0a8abc3f543501c72b41ed40131f3',
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
