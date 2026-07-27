import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6457dac8c38683101c72b41ed40131d0'],
    table: 'sys_ux_macroponent',
    data: {
        category: 'page',
        composition: `[
    {
        "definition": {
            "id": "d356d14b6e293a3020a244b63d278d8f",
            "type": "MACROPONENT"
        },
        "elementId": "8515f3e853031010ffa5ddeeff7b1297_Row_One",
        "elementLabel": "Row One",
        "eventMappings": [],
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "overrides": {
            "composition": [
                {
                    "definition": {
                        "id": "66ee7d86e81f696c9f9be19d8424cc0d",
                        "type": "MACROPONENT"
                    },
                    "elementId": "list_1",
                    "elementLabel": "List 1",
                    "eventMappings": [
                        {
                            "eventMappingId": "ckekiijddtfaaaabbeeddhhhggxwbukdaan",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#ROW_CLICKED",
                            "sourceEventCorrelationId": null,
                            "sourceEventDefinition": {
                                "apiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#ROW_CLICKED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": {
                                        "sysId": "55575ec8c38683101c72b41ed40131cd"
                                    },
                                    "conditional": null,
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "ckekiijhhgeeaaaabbffddhhhggnddxxhmgo",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        },
                        {
                            "eventMappingId": "cknffhhtriicaaaabbaaddhiibbiddaqiigjtpreview",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#FORM_EDIT_PREVIEW_RECORD_CLICKED",
                            "sourceEventCorrelationId": null,
                            "sourceEventDefinition": {
                                "apiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#FORM_EDIT_PREVIEW_RECORD_CLICKED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": {
                                        "sysId": "55575ec8c38683101c72b41ed40131cd"
                                    },
                                    "conditional": null,
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "cknffhhtriicaaaabbbbddhiibbfaafihumjjpreview",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        },
                        {
                            "eventMappingId": "ckekiihbrhhaaaabbccddhhhgghotflrjjd",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#DA_ITEM_SELECTED",
                            "sourceEventCorrelationId": null,
                            "sourceEventDefinition": {
                                "apiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#DA_ITEM_SELECTED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": null,
                                    "conditional": null,
                                    "declarativeAction": null,
                                    "event": {
                                        "apiName": "x_1937158_myarchim.NAV_ITEM_SELECTED_RELAY_6457dac8c38683101c72b41ed40131d0",
                                        "payload": {
                                            "container": {
                                                "external": {
                                                    "type": "JSON_LITERAL",
                                                    "value": null
                                                },
                                                "fields": {
                                                    "container": {
                                                        "sysId": {
                                                            "type": "JSON_LITERAL",
                                                            "value": "-1"
                                                        },
                                                        "table": {
                                                            "binding": {
                                                                "address": [
                                                                    "table"
                                                                ]
                                                            },
                                                            "type": "EVENT_PAYLOAD_BINDING"
                                                        }
                                                    },
                                                    "type": "MAP_CONTAINER"
                                                },
                                                "multiInstField": {
                                                    "type": "JSON_LITERAL",
                                                    "value": null
                                                },
                                                "params": {
                                                    "type": "JSON_LITERAL",
                                                    "value": null
                                                },
                                                "passiveNavigation": {
                                                    "type": "JSON_LITERAL",
                                                    "value": null
                                                },
                                                "redirect": {
                                                    "type": "JSON_LITERAL",
                                                    "value": true
                                                },
                                                "route": {
                                                    "type": "JSON_LITERAL",
                                                    "value": "record"
                                                },
                                                "title": {
                                                    "type": "JSON_LITERAL",
                                                    "value": null
                                                }
                                            },
                                            "type": "MAP_CONTAINER"
                                        },
                                        "sysId": "e5575ec8c38683101c72b41ed40131e7"
                                    },
                                    "operation": null,
                                    "targetId": "ckekiihtaiaaaabbddddhhhggodrtclhf",
                                    "type": "EVENT"
                                }
                            ]
                        }
                    ],
                    "isHero": false,
                    "isHidden": {
                        "type": "JSON_LITERAL",
                        "value": false
                    },
                    "isNonDestructive": false,
                    "overrides": {},
                    "propertyValues": {
                        "actionConfigId": {
                            "binding": {
                                "address": [
                                    "actionConfigId"
                                ],
                                "category": "app"
                            },
                            "type": "CONTEXT_BINDING"
                        },
                        "columns": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "disableInlineEditing": {
                            "binding": {
                                "address": [
                                    "disableInlineEditing"
                                ],
                                "category": "props"
                            },
                            "type": "CONTEXT_BINDING"
                        },
                        "hideDeclarativeActions": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideHighlightedValues": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "highlightedValueConfigId": {
                            "binding": {
                                "address": [
                                    "highlightedValueConfigId"
                                ],
                                "category": "app"
                            },
                            "type": "CONTEXT_BINDING"
                        },
                        "limit": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "listMenuOpen": {
                            "type": "JSON_LITERAL",
                            "value": true
                        },
                        "listTitle": {
                            "script": {
                                "apiVersion": "2.0.0",
                                "inlineScript": null,
                                "scriptSysId": "e9575ec8c38683101c72b41ed40131d6"
                            },
                            "type": "CLIENT_TRANSFORM_SCRIPT"
                        },
                        "maxCharLimit": {
                            "type": "JSON_LITERAL",
                            "value": "4000"
                        },
                        "maxColumns": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "menuSelection": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "page": {
                            "type": "JSON_LITERAL",
                            "value": "1"
                        },
                        "query": {
                            "binding": {
                                "address": [
                                    "query"
                                ],
                                "category": "props"
                            },
                            "type": "CONTEXT_BINDING"
                        },
                        "recordSelectedQuery": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "recordSelectedSysId": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "recordSelectedTable": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "recordSelectedView": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "selectedListId": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "table": {
                            "binding": {
                                "address": [
                                    "table"
                                ],
                                "category": "props"
                            },
                            "type": "CONTEXT_BINDING"
                        },
                        "view": {
                            "binding": {
                                "address": [
                                    "listView"
                                ],
                                "category": "props"
                            },
                            "type": "CONTEXT_BINDING"
                        },
                        "wordWrap": {
                            "binding": {
                                "address": [
                                    "wrapListText"
                                ]
                            },
                            "type": "STATE_BINDING"
                        }
                    },
                    "slot": null,
                    "styles": {
                        "display": "flex",
                        "flex-direction": "column",
                        "height": "100%"
                    }
                }
            ],
            "layout": {
                "default": {
                    "children": null,
                    "items": [
                        {
                            "element_id": "list_1",
                            "rules": {},
                            "styles": {}
                        }
                    ],
                    "root": null,
                    "rules": {},
                    "styles": {
                        "display": "flex",
                        "flex-direction": "column",
                        "height": "100%"
                    },
                    "type": "flex"
                },
                "version": "3.0.0"
            }
        },
        "preset": null,
        "propertyValues": {
            "ariaRegionHeadingLevel": {
                "type": "JSON_LITERAL",
                "value": "1"
            },
            "ariaRegionName": {
                "type": "TRANSLATION_LITERAL",
                "value": {
                    "code": null,
                    "comment": "",
                    "message": ""
                }
            },
            "ariaRole": {
                "type": "JSON_LITERAL",
                "value": ""
            },
            "hideEmptyStateUi": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "includeAriaHeading": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "type": {
                "type": "JSON_LITERAL",
                "value": "section"
            }
        },
        "slot": null,
        "styles": {
            "height": "100%"
        }
    },
    {
        "definition": {
            "id": "61c315e9ccb8970546c30f3e2da41a32",
            "type": "MACROPONENT_VIEWPORT"
        },
        "elementId": "modal_viewport_1",
        "elementLabel": "Modal viewport 1",
        "eventMappings": [],
        "isHero": false,
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": ""
        },
        "isNonDestructive": false,
        "overrides": {},
        "propertyValues": {
            "bare": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "contents": {
                "binding": {
                    "address": [
                        "contents"
                    ]
                },
                "type": "STATE_BINDING"
            },
            "disableDismiss": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "displayOptions": {
                "binding": {
                    "address": [
                        "displayOptions"
                    ]
                },
                "type": "STATE_BINDING"
            },
            "size": {
                "type": "JSON_LITERAL",
                "value": "md"
            }
        },
        "slot": null,
        "styles": {}
    }
]`,
        data: `[
    {
        "definition": {
            "id": "53f70741b7a32010415d6c91de11a9c0",
            "type": "TRANSFORM"
        },
        "elementId": "resolve_route_parent_tables",
        "elementLabel": "Resolve route parent tables",
        "eventMappings": [
            {
                "eventMappingId": "cknkorqqvaaaaeeeddghhvmmyujtshh",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_uxf.DATA_FETCH_SUCCEEDED",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_uxf.DATA_FETCH_SUCCEEDED",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "clientScript": {
                            "sysId": "a5575ec8c38683101c72b41ed40131db"
                        },
                        "conditional": null,
                        "declarativeAction": null,
                        "event": null,
                        "operation": null,
                        "targetId": "cknkorqqvaaaaeefddghhvhcciiddzndx",
                        "type": "CLIENT_SCRIPT"
                    }
                ]
            }
        ],
        "inputValues": {
            "sysId": {
                "binding": {
                    "address": [
                        "navigationPayload",
                        "fields",
                        "sysId"
                    ]
                },
                "type": "STATE_BINDING"
            },
            "table": {
                "binding": {
                    "address": [
                        "navigationPayload",
                        "fields",
                        "table"
                    ]
                },
                "type": "STATE_BINDING"
            }
        },
        "readEvaluationMode": "EXPLICIT"
    },
    {
        "definition": {
            "id": "367f89e30b102010a8b1c96237673a85",
            "type": "COMPOSITE"
        },
        "elementId": "dynamic_routing_simplelist",
        "elementLabel": "Dynamic routing for simplelist",
        "eventMappings": [],
        "inputValues": {
            "routeConfigId": {
                "binding": {
                    "address": [
                        "routeConfigId"
                    ],
                    "category": "app"
                },
                "type": "CONTEXT_BINDING"
            }
        },
        "readEvaluationMode": "EAGER"
    }
]`,
        disable_auto_reflow: 'false',
        dispatched_events:
            'e1575ec8c38683101c72b41ed40131e1,e5575ec8c38683101c72b41ed40131e7,21575ec8c38683101c72b41ed40131ec',
        extends: '19be392623033300f4b4c50947bf65ba',
        form_factors: '{}',
        handled_events: '31a6f26db3163010bf6680bd26a8dcf1,a3b05c2f9868a010f877170d6e7d656a',
        internal_event_mappings: `{
    "MACROPONENT_PROPERTY_CHANGED": [
        {
            "broker": null,
            "clientScript": {
                "sysId": "9d575ec8c38683101c72b41ed40131b4"
            },
            "conditional": null,
            "declarativeAction": null,
            "event": null,
            "operation": null,
            "targetId": "ckiggybubbffaaaabbuddgiihhrzquyjhhf",
            "type": "CLIENT_SCRIPT"
        },
        {
            "broker": null,
            "clientScript": {
                "sysId": "d1575ec8c38683101c72b41ed40131bc"
            },
            "conditional": null,
            "declarativeAction": null,
            "event": null,
            "operation": null,
            "targetId": "ckufccuziaaaaagkddeggvaccoeelsbbhh",
            "type": "CLIENT_SCRIPT"
        }
    ],
    "MACROPONENT_READY": [
        {
            "broker": null,
            "clientScript": {
                "sysId": "9d575ec8c38683101c72b41ed40131b4"
            },
            "conditional": null,
            "declarativeAction": null,
            "event": null,
            "operation": null,
            "targetId": "ckiggybjjtcaaaabbhddgiihhbzltaaafff",
            "type": "CLIENT_SCRIPT"
        },
        {
            "broker": null,
            "clientScript": {
                "sysId": "d1575ec8c38683101c72b41ed40131bc"
            },
            "conditional": null,
            "declarativeAction": null,
            "event": null,
            "operation": null,
            "targetId": "cklcqqjucaaaaggtddhhhrlxiiaaiggddbb",
            "type": "CLIENT_SCRIPT"
        }
    ],
    "sn_uib_base_aw.SIMPLE_LIST#NAV_ITEM_SELECTED": [
        {
            "broker": null,
            "clientScript": null,
            "conditional": null,
            "declarativeAction": null,
            "event": {
                "apiName": "sn_canvas_core.NAV_ITEM_SELECTED",
                "payload": {
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
                        "targetRoute": {
                            "binding": {
                                "address": [
                                    "targetRoute"
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
                },
                "sysId": "8b82bf18e5276c8e423b6e4e0889b463"
            },
            "operation": null,
            "targetId": "ckgcbbbvpjaaaaaagddghhanwwsqhsk",
            "type": "EVENT"
        }
    ],
    "sn_uib_base_aw.SIMPLE_LIST#OPEN_MODAL": [
        {
            "broker": null,
            "clientScript": {
                "sysId": "11575ec8c38683101c72b41ed40131d2"
            },
            "conditional": null,
            "declarativeAction": null,
            "event": null,
            "operation": null,
            "targetId": "ckszdjoiiqaaaaaaqddhiiddshhvqbbjbbhh",
            "type": "CLIENT_SCRIPT"
        }
    ]
}`,
        keyboard_shortcuts: '{}',
        layout: `{
    "default": {
        "children": null,
        "isInline": null,
        "items": [
            {
                "element_id": "8515f3e853031010ffa5ddeeff7b1297_Row_One",
                "rules": {},
                "styles": {
                    "grid-area": "row-one"
                }
            }
        ],
        "root": null,
        "rules": null,
        "styles": {
            "grid-gap": "1px",
            "grid-template-areas": "\\"row-one\\"",
            "grid-template-columns": "1fr",
            "grid-template-rows": "minmax(400px,auto)",
            "height": "100%"
        },
        "templateId": null,
        "type": "grid"
    },
    "version": "3.0.0"
}`,
        name: 'Simple List copy',
        props: `[
    {
        "defaultValue": null,
        "description": null,
        "disabled": false,
        "fieldType": "string",
        "label": "disableInlineEditing",
        "mandatory": false,
        "name": "disableInlineEditing",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "description": null,
        "disabled": false,
        "fieldType": null,
        "label": "listTitle",
        "mandatory": false,
        "name": "listTitle",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": null
    },
    {
        "defaultValue": null,
        "description": null,
        "disabled": false,
        "fieldType": null,
        "label": "query",
        "mandatory": false,
        "name": "query",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": null
    },
    {
        "defaultValue": null,
        "description": "List of all user preferences",
        "disabled": false,
        "fieldType": "json",
        "label": "user preferences",
        "mandatory": false,
        "name": "userPrefs",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": null
    },
    {
        "defaultValue": null,
        "description": null,
        "disabled": false,
        "fieldType": null,
        "label": "Table",
        "mandatory": true,
        "name": "table",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": null
    },
    {
        "defaultValue": "",
        "description": null,
        "disabled": false,
        "fieldType": "string",
        "label": "listView",
        "mandatory": false,
        "name": "listView",
        "readOnly": true,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "defaultValue": "",
        "description": "Entering 'current' opens a record in a sub-tab",
        "disabled": false,
        "fieldType": "string",
        "label": "Sub-navigation route",
        "mandatory": false,
        "name": "subNavRoute",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    }
]`,
        required_translations: '[ ]',
        root_component_config: `{
    "bare": true
}`,
        schema_version: '1.0.0',
        state_properties: `[
    {
        "description": "",
        "fieldType": "boolean",
        "initialValue": {
            "type": "JSON_LITERAL",
            "value": false
        },
        "label": "wrapListText",
        "name": "wrapListText",
        "shape": "",
        "valueType": "boolean"
    },
    {
        "description": "",
        "fieldType": "json",
        "initialValue": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "label": "navigationPayload ",
        "name": "navigationPayload ",
        "shape": "",
        "valueType": "json"
    },
    {
        "description": "",
        "fieldType": "string",
        "initialValue": {
            "binding": {
                "address": [
                    "routeParentTables"
                ],
                "category": "app"
            },
            "type": "CONTEXT_BINDING"
        },
        "label": "routeParentTables",
        "name": "routeParentTables",
        "shape": "",
        "valueType": "string"
    },
    {
        "description": "",
        "fieldType": "boolean",
        "initialValue": {
            "type": "JSON_LITERAL",
            "value": true
        },
        "label": "bare",
        "name": "bare",
        "shape": "",
        "valueType": "boolean"
    },
    {
        "description": "",
        "fieldType": "json",
        "initialValue": {
            "type": "JSON_LITERAL",
            "value": {}
        },
        "label": "displayOptions",
        "name": "displayOptions",
        "shape": "",
        "valueType": "json"
    },
    {
        "description": "",
        "fieldType": "json",
        "initialValue": {
            "type": "JSON_LITERAL",
            "value": {}
        },
        "label": "contents",
        "name": "contents",
        "shape": "",
        "valueType": "json"
    }
]`,
        style_config: '{}',
    },
})
