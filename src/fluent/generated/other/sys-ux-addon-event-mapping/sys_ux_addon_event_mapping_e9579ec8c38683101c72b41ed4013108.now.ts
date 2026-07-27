import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['e9579ec8c38683101c72b41ed4013108'],
    table: 'sys_ux_addon_event_mapping',
    data: {
        active: 'true',
        description: 'Open Article Template Selector Modal on Knowledge Simple List',
        name: 'Open Article Template Selector Modal on Knowledge Simple List',
        parent_macroponent: '6457dac8c38683101c72b41ed40131d0',
        source_da: '85ad09be535b10108ce6ddeeff7b120e',
        source_element_id: 'list_1',
        sys_domain: 'global',
        sys_domain_path: '/',
        target_event: '31a6f26db3163010bf6680bd26a8dcf1',
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
