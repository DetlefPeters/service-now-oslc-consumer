import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['60c0e8ebc3f543501c72b41ed40131af'],
    table: 'sys_ux_addon_event_mapping',
    data: {
        active: 'true',
        name: 'Open Change Page',
        parent_macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        source_da: '08ef66b377531110b4e6aeb4bb5a997b',
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
