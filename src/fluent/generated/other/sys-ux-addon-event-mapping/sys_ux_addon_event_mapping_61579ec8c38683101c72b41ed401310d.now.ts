import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['61579ec8c38683101c72b41ed401310d'],
    table: 'sys_ux_addon_event_mapping',
    data: {
        active: 'true',
        description: 'Simple List New button to open new tab',
        name: 'UXF Simple List New',
        parent_macroponent: '6457dac8c38683101c72b41ed40131d0',
        source_da: '17c13e7273131010a0a79329faf6a794',
        source_element_id: 'list_1',
        sys_domain: 'global',
        sys_domain_path: '/',
        target_event: 'a3b05c2f9868a010f877170d6e7d656a',
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
