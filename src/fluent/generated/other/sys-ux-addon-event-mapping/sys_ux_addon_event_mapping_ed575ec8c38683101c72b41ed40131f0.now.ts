import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ed575ec8c38683101c72b41ed40131f0'],
    table: 'sys_ux_addon_event_mapping',
    data: {
        active: 'true',
        name: 'OPEN_NEW_MODEL_MODAL',
        parent_macroponent: '6457dac8c38683101c72b41ed40131d0',
        source_da: '50181b4a73253010c01ce234c4f6a7b5',
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
