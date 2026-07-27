import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a4c0e8ebc3f543501c72b41ed4013188'],
    table: 'sys_ux_addon_event_mapping',
    data: {
        active: 'true',
        description: 'Open KB interceptor on Knowledge List',
        name: 'Open KB interceptor on Knowledge List',
        parent_macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        source_da: '15803ee9cc7f6210f877cb18a8d09a1d',
        source_element_id: 'list',
        sys_domain: 'global',
        sys_domain_path: '/',
        target_event: '8c1321d50f1310107d20409dc4767e52',
        target_payload_mapping: `{
    "container": {
        "fields": {
            "binding": {
                "address": [
                    "fields"
                ]
            },
            "type": "EVENT_PAYLOAD_BINDING"
        },
        "params": {
            "binding": {
                "address": [
                    "params"
                ]
            },
            "type": "EVENT_PAYLOAD_BINDING"
        },
        "route": {
            "binding": {
                "address": [
                    "route"
                ]
            },
            "type": "EVENT_PAYLOAD_BINDING"
        }
    },
    "type": "MAP_CONTAINER"
}`,
    },
})
