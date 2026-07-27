import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a9575ec8c38683101c72b41ed40131f7'],
    table: 'sys_ux_addon_event_mapping',
    data: {
        active: 'true',
        description: 'Knowledge Simple List Open Record',
        name: 'Knowledge Simple List Open Record',
        parent_macroponent: '6457dac8c38683101c72b41ed40131d0',
        source_da: 'ba4a8dfa535b10108ce6ddeeff7b1253',
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
        "multiInstField": {
            "binding": {
                "address": [
                    "multiInstField"
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
