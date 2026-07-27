import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['68c0e8ebc3f543501c72b41ed4013168'],
    table: 'sys_ux_addon_event_mapping',
    data: {
        active: 'true',
        description: 'Open Article Template Selector Modal on Knowledge List',
        name: 'Open Article Template Selector Modal on Knowledge List',
        parent_macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        source_da: '85ad09be535b10108ce6ddeeff7b120e',
        source_element_id: 'list',
        sys_domain: 'global',
        sys_domain_path: '/',
        target_event: '2640a5150f1310107d20409dc4767e8a',
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
