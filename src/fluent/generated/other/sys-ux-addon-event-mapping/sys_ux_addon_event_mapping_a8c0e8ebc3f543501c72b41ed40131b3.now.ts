import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a8c0e8ebc3f543501c72b41ed40131b3'],
    table: 'sys_ux_addon_event_mapping',
    data: {
        active: 'true',
        name: 'List New Problem task',
        parent_macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        source_da: '08b9e0520b7230106237818393673a89',
        source_element_id: 'list',
        sys_domain: 'global',
        sys_domain_path: '/',
        target_event: '2640a5150f1310107d20409dc4767e8a',
        target_payload_mapping: `{
    "container": {
        "fields": {
            "container": {
                "pageSubTitle": {
                    "binding": {
                        "address": [
                            "pageSubTitle"
                        ]
                    },
                    "type": "EVENT_PAYLOAD_BINDING"
                },
                "pageTitle": {
                    "binding": {
                        "address": [
                            "pageTitle"
                        ]
                    },
                    "type": "EVENT_PAYLOAD_BINDING"
                },
                "sysId": {
                    "binding": {
                        "address": [
                            "sysId"
                        ]
                    },
                    "type": "EVENT_PAYLOAD_BINDING"
                },
                "table": {
                    "binding": {
                        "address": [
                            "table"
                        ]
                    },
                    "type": "EVENT_PAYLOAD_BINDING"
                },
                "useDomain": {
                    "binding": {
                        "address": [
                            "useDomain"
                        ]
                    },
                    "type": "EVENT_PAYLOAD_BINDING"
                }
            },
            "type": "MAP_CONTAINER"
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
            "type": "JSON_LITERAL",
            "value": "interceptor"
        },
        "size": {
            "type": "JSON_LITERAL",
            "value": "lg"
        }
    },
    "type": "MAP_CONTAINER"
}`,
    },
})
