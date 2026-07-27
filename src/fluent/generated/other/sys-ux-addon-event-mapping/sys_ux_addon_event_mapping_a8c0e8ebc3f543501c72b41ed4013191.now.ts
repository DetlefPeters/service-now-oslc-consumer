import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a8c0e8ebc3f543501c72b41ed4013191'],
    table: 'sys_ux_addon_event_mapping',
    data: {
        active: 'true',
        description: "List New button to List page's Open Modal",
        name: 'UXF List New',
        parent_macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        source_da: '17c13e7273131010a0a79329faf6a794',
        source_element_id: 'list',
        sys_domain: 'global',
        sys_domain_path: '/',
        target_event: '8c1321d50f1310107d20409dc4767e52',
        target_payload_mapping: `{
    "container": {
        "external": {
            "binding": {
                "address": [
                    "external"
                ]
            },
            "type": "EVENT_PAYLOAD_BINDING"
        },
        "fields": {
            "binding": {
                "address": [
                    "fields"
                ]
            },
            "type": "EVENT_PAYLOAD_BINDING"
        },
        "multiInstField": "sysId",
        "params": {
            "binding": {
                "address": [
                    "params"
                ]
            },
            "type": "EVENT_PAYLOAD_BINDING"
        },
        "passiveNavigation": {
            "binding": {
                "address": [
                    "passiveNavigation"
                ]
            },
            "type": "EVENT_PAYLOAD_BINDING"
        },
        "redirect": {
            "binding": {
                "address": [
                    "redirect"
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
        },
        "title": {
            "binding": {
                "address": [
                    "title"
                ]
            },
            "type": "EVENT_PAYLOAD_BINDING"
        }
    },
    "type": "MAP_CONTAINER"
}`,
    },
})
