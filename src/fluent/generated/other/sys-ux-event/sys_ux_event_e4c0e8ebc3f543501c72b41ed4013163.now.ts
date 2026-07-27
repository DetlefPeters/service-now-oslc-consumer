import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['e4c0e8ebc3f543501c72b41ed4013163'],
    table: 'sys_ux_event',
    data: {
        event_name: 'NAV_ITEM_SELECTED_RELAY_10c0a8abc3f543501c72b41ed40131f3',
        label: 'Nav item selected relay',
        props: `[
    {
        "fieldType": "string",
        "interfaceApiName": "global.route",
        "label": "Route type",
        "name": "route",
        "valueType": "string"
    },
    {
        "fieldType": "json",
        "interfaceApiName": "global.route",
        "label": "Route Fields",
        "name": "fields",
        "valueType": "string"
    },
    {
        "fieldType": "json",
        "interfaceApiName": "global.route",
        "label": "Optionals Parameters",
        "name": "params",
        "valueType": "string"
    },
    {
        "fieldType": "boolean",
        "label": "If redirect is true, url will be redirected",
        "name": "redirect",
        "valueType": "string"
    },
    {
        "fieldType": "boolean",
        "label": "Load in background",
        "name": "passiveNavigation",
        "valueType": "string"
    },
    {
        "fieldType": "string",
        "label": "Title",
        "name": "title",
        "valueType": "string"
    },
    {
        "description": "Field that is used in conjunction with route, params to support multiple instance of a content",
        "fieldType": "string",
        "label": "Multi Instance Field",
        "name": "multiInstField",
        "valueType": "string"
    },
    {
        "description": "Object for linking to an external URL",
        "fieldType": "json",
        "label": "External URL Object",
        "name": "external",
        "typeMetadata": {
            "schema": {
                "properties": {
                    "url": {
                        "description": "The URL to open",
                        "type": "string"
                    }
                },
                "title": "External URL Object",
                "type": "object"
            }
        },
        "valueType": "string"
    }
]`,
        schema_version: '1.0.0',
    },
})
