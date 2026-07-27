import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['10c0a8abc3f543501c72b41ed40131f3'],
    table: 'sys_ux_macroponent',
    data: {
        category: 'page',
        composition: `[
    {
        "definition": {
            "id": "07b0bb09419d26f0af681796bc548f19",
            "type": "MACROPONENT"
        },
        "elementId": "resizable_panes",
        "elementLabel": "Resizable Panes",
        "eventMappings": [
            {
                "eventMappingId": "ckkepyixggaaaaaapddghhzcekxkeeljj",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "now_resizable_pane.NOW_RESIZABLE_PANES#PANE_SIZES#CHANGED",
                "sourceEventDefinition": {
                    "apiName": "now_resizable_pane.NOW_RESIZABLE_PANES#PANE_SIZES#CHANGED",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "clientScript": {
                            "sysId": "58c0a8ebc3f543501c72b41ed40131a2"
                        },
                        "declarativeAction": null,
                        "event": null,
                        "operation": null,
                        "targetId": "ckkepyixggaaaaaaqddghhzeyklynuq",
                        "type": "CLIENT_SCRIPT"
                    }
                ]
            }
        ],
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": ""
        },
        "isNonDestructive": false,
        "overrides": {
            "composition": [
                {
                    "definition": {
                        "id": "d5119191a4d27b765b12d0b563e00ee6",
                        "type": "MACROPONENT"
                    },
                    "elementId": "list_nav",
                    "elementLabel": "List nav",
                    "eventMappings": [
                        {
                            "eventMappingId": "cktnccxchyaaaaccaaddgiioyjjwjsoggy",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_rec_list_menu_c.NOW_RECORD_LIST_MENU_CONNECTED#CONTENT_ITEMS_SELECTED",
                            "sourceEventCorrelationId": null,
                            "sourceEventDefinition": {
                                "apiName": "sn_rec_list_menu_c.NOW_RECORD_LIST_MENU_CONNECTED#CONTENT_ITEMS_SELECTED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": {
                                        "sysId": "24c0a8ebc3f543501c72b41ed40131f4"
                                    },
                                    "conditional": null,
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "cktnccxchyaaaaccbbddgiiopihggexoii",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        },
                        {
                            "eventMappingId": "ckoiiyjojeaaaaeenddgiiaalyqohccdi",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_rec_list_menu_c.NOW_RECORD_LIST_MENU_CONNECTED#ITEM_CLICKED",
                            "sourceEventCorrelationId": null,
                            "sourceEventDefinition": {
                                "apiName": "sn_rec_list_menu_c.NOW_RECORD_LIST_MENU_CONNECTED#ITEM_CLICKED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": {
                                        "sysId": "28c0a8ebc3f543501c72b41ed40131d6"
                                    },
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "ckoiiyjojeaaaaeeoddgiiaautfebbbzff",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        }
                    ],
                    "isHidden": {
                        "script": {
                            "apiVersion": "1.0.0",
                            "inlineScript": "/**\\n  * @param {params} params\\n  * @param {api} params.api\\n  * @param {any} params.imports\\n  */\\nfunction evaluateProperty({api}) {\\n\\treturn !api.state.listMenuOpen;\\n}"
                        },
                        "type": "CLIENT_TRANSFORM_SCRIPT"
                    },
                    "isNonDestructive": false,
                    "overrides": {},
                    "propertyValues": {
                        "columns": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "conditions": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "configurationId": {
                            "binding": {
                                "address": [
                                    "listConfigId"
                                ],
                                "category": "app"
                            },
                            "type": "CONTEXT_BINDING"
                        },
                        "error": {
                            "type": "JSON_LITERAL",
                            "value": {}
                        },
                        "hideCellFilter": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideCheckboxHover": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideColumnFiltering": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideColumnGrouping": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideColumnResizing": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideColumnSorting": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideDragAndDrop": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideEmptyStateImage": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideFirstPage": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideHeader": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideHighlightContent": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideHighlightedValues": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideInlineEditing": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideLastPage": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideLastRefreshedText": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideLinks": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideListActions": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideListCreation": {
                            "type": "JSON_LITERAL",
                            "value": true
                        },
                        "hideMenuButton": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideNextPage": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideOptionToSaveAs": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hidePages": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hidePagination": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hidePanelAdvanced": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hidePanelButton": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hidePanelConditionDelete": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hidePanelFooter": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hidePanelRestore": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hidePreviousPage": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideQuickEdit": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideRange": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideRecordCountBadge": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideReferenceLinks": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideRefreshButton": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideRowCount": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideRowSelector": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideRowsPerPageSelector": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideSelectAll": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideSharingButton": {
                            "type": "JSON_LITERAL",
                            "value": true
                        },
                        "hideTabs": {
                            "type": "JSON_LITERAL",
                            "value": true
                        },
                        "hideTitle": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "highlightContent": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "listId": {
                            "binding": {
                                "address": [
                                    "listId"
                                ],
                                "category": "props"
                            },
                            "type": "CONTEXT_BINDING"
                        },
                        "listMenuCrud": {
                            "binding": {
                                "address": [
                                    "CRUD"
                                ]
                            },
                            "type": "STATE_BINDING"
                        },
                        "listMenuOpen": {
                            "type": "JSON_LITERAL",
                            "value": true
                        },
                        "maxCharacters": {
                            "type": "JSON_LITERAL",
                            "value": 0
                        },
                        "selectedListId": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "table": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "targetTable": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "tiny": {
                            "binding": {
                                "address": [
                                    "tinyId"
                                ]
                            },
                            "type": "STATE_BINDING"
                        },
                        "title": {
                            "type": "JSON_LITERAL",
                            "value": {
                                "comment": "",
                                "message": ""
                            }
                        },
                        "wordWrap": {
                            "type": "JSON_LITERAL",
                            "value": false
                        }
                    },
                    "slot": "left",
                    "styles": {}
                },
                {
                    "definition": {
                        "id": "66ee7d86e81f696c9f9be19d8424cc0d",
                        "type": "MACROPONENT"
                    },
                    "elementId": "list",
                    "elementLabel": "List ",
                    "eventMappings": [
                        {
                            "eventMappingId": "cktnccxbbhccaaaabbvddgiioljjjjaaabrg",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#CONTENT_ITEMS_SELECTED",
                            "sourceEventCorrelationId": null,
                            "sourceEventDefinition": {
                                "apiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#CONTENT_ITEMS_SELECTED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": {
                                        "sysId": "24c0a8ebc3f543501c72b41ed40131f4"
                                    },
                                    "conditional": null,
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "cktnccxbbhccaaaabbwddgiioddtsgtseeff",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        },
                        {
                            "eventMappingId": "cktddiibflddaaaabbccddhiiddvyuogtik",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#ADD_NOTIFICATIONS",
                            "sourceEventCorrelationId": null,
                            "sourceEventDefinition": {
                                "apiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#ADD_NOTIFICATIONS",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": null,
                                    "declarativeAction": null,
                                    "event": {
                                        "apiName": "sn_uxf_page.NOW_UXF_PAGE#ADD_NOTIFICATIONS",
                                        "payload": {
                                            "container": {
                                                "items": {
                                                    "binding": {
                                                        "address": [
                                                            "notifications"
                                                        ]
                                                    },
                                                    "type": "EVENT_PAYLOAD_BINDING"
                                                }
                                            },
                                            "type": "MAP_CONTAINER"
                                        },
                                        "sysId": "49fe7d575f983bb3f8eea3fa8d40694c"
                                    },
                                    "operation": null,
                                    "targetId": "cktddiibflddaaaabbddddhiiddjkslhscaa",
                                    "type": "EVENT"
                                }
                            ]
                        },
                        {
                            "eventMappingId": "ckkddaeeweaaaahhzddhiiaahhfggiffbbbbb",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#LIST_MENU_BUTTON_TOGGLED",
                            "sourceEventDefinition": {
                                "apiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#LIST_MENU_BUTTON_TOGGLED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": {
                                        "sysId": "64c0a8ebc3f543501c72b41ed40131c0"
                                    },
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "ckkddaeewfaaaaiiaaddhiiaarukhaajjh",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        },
                        {
                            "eventMappingId": "ckkddjjityaaaahhxddhiiaaeegggafyog",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#SAVE_REQUESTED",
                            "sourceEventDefinition": {
                                "apiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#SAVE_REQUESTED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": {
                                        "sysId": "a8c0a8ebc3f543501c72b41ed40131d1"
                                    },
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "ckkddjjityaaaahhyddhiiaaqhhpmeecccck",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        },
                        {
                            "eventMappingId": "ckkddjjiiqbaaaahhvddhiiaaxdvaavasp",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#SAVE_AS_REQUESTED",
                            "sourceEventDefinition": {
                                "apiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#SAVE_AS_REQUESTED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": {
                                        "sysId": "a8c0a8ebc3f543501c72b41ed40131d1"
                                    },
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "ckkddjjiiqbaaaahhwddhiiaaxxehbjan",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        },
                        {
                            "eventMappingId": "ckkddiieebffaaaahhtddhiiaacchattdggu",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#RENAME_REQUESTED",
                            "sourceEventDefinition": {
                                "apiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#RENAME_REQUESTED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": {
                                        "sysId": "a8c0a8ebc3f543501c72b41ed40131d1"
                                    },
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "ckkddiieebffaaaahhuddhiiaaxjcciidffdm",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        },
                        {
                            "eventMappingId": "ckkddhhkffjaaaahhrddhiiaakxfcaaehu",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#DELETE_REQUESTED",
                            "sourceEventDefinition": {
                                "apiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#DELETE_REQUESTED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": {
                                        "sysId": "a8c0a8ebc3f543501c72b41ed40131d1"
                                    },
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "ckkddhhkffjaaaahhsddhiiaazgaawvzpu",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        },
                        {
                            "eventMappingId": "ckkddggqfcaaaahhpddhiiaacoupkakz",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#EDIT_COLUMNS_REQUESTED",
                            "sourceEventDefinition": {
                                "apiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#EDIT_COLUMNS_REQUESTED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": {
                                        "sysId": "a8c0a8ebc3f543501c72b41ed40131d1"
                                    },
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "ckkddggqfcaaaahhqddhiiaahbbbddrzml",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        },
                        {
                            "eventMappingId": "ckkddffsegaaaahhnddhiiaaazmksfrv",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#FORM_EDIT_PREVIEW_RECORD_CLICKED",
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
                                        "sysId": "2cc0e8ebc3f543501c72b41ed4013107"
                                    },
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "ckkddffsegaaaahhoddhiiaakymrzccda",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        },
                        {
                            "eventMappingId": "ckdtggfiiddfaaaaaaaddhhheenpggifbbpee",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#DA_ITEM_SELECTED",
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
                                    "declarativeAction": null,
                                    "event": {
                                        "apiName": "x_1937158_myarchim.NAV_ITEM_SELECTED_RELAY_10c0a8abc3f543501c72b41ed40131f3",
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
                                                    "value": null
                                                },
                                                "route": {
                                                    "type": "JSON_LITERAL",
                                                    "value": "record"
                                                },
                                                "targetRoute": {
                                                    "type": "JSON_LITERAL",
                                                    "value": null
                                                },
                                                "title": {
                                                    "type": "JSON_LITERAL",
                                                    "value": null
                                                }
                                            },
                                            "type": "MAP_CONTAINER"
                                        },
                                        "sysId": "e4c0e8ebc3f543501c72b41ed4013163"
                                    },
                                    "operation": null,
                                    "targetId": "ckdtggfmgglaaaaaabddhhheeleesdaaubbh",
                                    "type": "EVENT"
                                }
                            ]
                        },
                        {
                            "eventMappingId": "ckkddddojcaaaahhjddhiiaavevxwrsgg",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_record_list_con.NOW_RECORD_LIST_CONNECTED#ROW_CLICKED",
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
                                        "sysId": "2cc0e8ebc3f543501c72b41ed4013107"
                                    },
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "ckkddddojcaaaahhkddhiiaaqgghhysgmg",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        }
                    ],
                    "isHidden": {
                        "type": "JSON_LITERAL",
                        "value": ""
                    },
                    "isNonDestructive": false,
                    "overrides": {},
                    "preset": null,
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
                        "allRecordsSelected": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "columnPreferenceKey": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "columns": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "columns"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "daClientActionContract": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "disableInlineEditing": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "error": {
                            "type": "JSON_LITERAL",
                            "value": {}
                        },
                        "exceptedRecords": {
                            "type": "JSON_LITERAL",
                            "value": []
                        },
                        "fixedQuery": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "fixedQuery"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "groupByField": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "groupByField"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "headerSize": {
                            "type": "JSON_LITERAL",
                            "value": "lg"
                        },
                        "headingLevel": {
                            "type": "JSON_LITERAL",
                            "value": 1
                        },
                        "hideCellFilter": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideCellFilter"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideCheckboxHover": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideCheckboxHover"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideColumnFiltering": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideColumnFiltering"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideColumnGrouping": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideColumnGrouping"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideColumnReorder": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideColumnResizing": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideColumnResizing"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideColumnSorting": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideColumnSorting"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideDeclarativeActions": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideListActions"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideDotwalk": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hideDragDrop": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideDragAndDrop"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideEmptyStateImage": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideEmptyStateImage"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideFilterPanel": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hidePanelButton"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideFirstPage": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideFirstPage"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideHeader": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideHeader"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideHighlightContent": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideHighlightContent"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideHighlightedValues": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideHighlightedValues"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideInlineEditing": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideInlineEditing"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideLastPage": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideLastPage"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideLastRefreshedText": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideLastRefreshedText"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideLimitSelector": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideRowsPerPageSelector"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideLinks": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideLinks"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideListSharing": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideSharingButton"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideMenuButton": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideMenuButton"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideNextPage": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideNextPage"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideOptionToSaveAs": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideOptionToSaveAs"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hidePages": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hidePages"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hidePagination": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hidePagination"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hidePanelAdvanced": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hidePanelAdvanced"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hidePanelConditionDelete": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hidePanelConditionDelete"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hidePanelFooter": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hidePanelFooter"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hidePanelRestore": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hidePanelRestore"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hidePersonalization": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hidePreviousPage": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hidePreviousPage"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideQuickEdit": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideQuickEdit"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideRange": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideRange"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideRefreshButton": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideRefreshButton"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideRowCount": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideRowCount"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideRowSelector": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideRowSelector"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideSelectAll": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideSelectAll"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideTitle": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideTitle"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideTitleRowCount": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideRecordCountBadge"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "hideUnnecessaryRowSelectors": {
                            "type": "JSON_LITERAL",
                            "value": true
                        },
                        "highlightContent": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "highlightContent"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
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
                        "isRefList": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "hideReferenceLinks"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "limit": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "listCrud": {
                            "type": "JSON_LITERAL",
                            "value": {}
                        },
                        "listMenuOpen": {
                            "binding": {
                                "address": [
                                    "listMenuOpen"
                                ]
                            },
                            "type": "STATE_BINDING"
                        },
                        "listTitle": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "title"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "maxCharLimit": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "maxCharactersValue"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "maxColumns": {
                            "type": "JSON_LITERAL",
                            "value": "50"
                        },
                        "menuSelection": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "targetTable"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "nrlLandmark": {
                            "type": "JSON_LITERAL",
                            "value": true
                        },
                        "overrideWordWrapUserPref": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "page": {
                            "type": "JSON_LITERAL",
                            "value": 1
                        },
                        "query": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "conditions"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
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
                        "refreshRequested": {
                            "binding": {
                                "address": [
                                    "listRefresh"
                                ]
                            },
                            "type": "STATE_BINDING"
                        },
                        "selectedListId": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "selectedListId"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "selectedRecords": {
                            "type": "JSON_LITERAL",
                            "value": []
                        },
                        "table": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "table"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        },
                        "tiny": {
                            "binding": {
                                "address": [
                                    "tinyId"
                                ]
                            },
                            "type": "STATE_BINDING"
                        },
                        "view": {
                            "binding": {
                                "address": [
                                    "list_nav",
                                    "view"
                                ]
                            },
                            "type": "ELEMENT_BINDING"
                        },
                        "wordWrap": {
                            "binding": {
                                "address": [
                                    "list_navigation_information",
                                    "listMenuData",
                                    "wordWrap"
                                ]
                            },
                            "type": "DATA_OUTPUT_BINDING"
                        }
                    },
                    "slot": "right",
                    "styles": {}
                }
            ],
            "layout": {}
        },
        "propertyValues": {
            "actionBar": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "actionBarConfig": {
                "container": {
                    "leftIcon": {
                        "type": "JSON_LITERAL",
                        "value": "record-activity-details-fill"
                    },
                    "middleIcon": {
                        "type": "JSON_LITERAL",
                        "value": "record-activity-stream-outline"
                    },
                    "rightIcon": {
                        "type": "JSON_LITERAL",
                        "value": "record-activity-outline"
                    }
                },
                "type": "MAP_CONTAINER"
            },
            "bare": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "defaultDisplayedPane": {
                "binding": {
                    "address": [
                        "listDisplayPanes"
                    ]
                },
                "type": "STATE_BINDING"
            },
            "defaultDividerPosition": {
                "binding": {
                    "address": [
                        "listDividerPosition"
                    ]
                },
                "type": "STATE_BINDING"
            },
            "disabled": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "dividerAriaLabel": {
                "type": "TRANSLATION_LITERAL",
                "value": {
                    "code": null,
                    "comment": "",
                    "message": "Resizable panes divider"
                }
            },
            "dividerHandleTooltip": {
                "type": "TRANSLATION_LITERAL",
                "value": {
                    "code": null,
                    "comment": "",
                    "message": "Resize List Menu: Click and drag with the mouse, or use left/right arrow keys (requires focus)."
                }
            },
            "dividerStyles": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "leftPaneConstraints": {
                "type": "JSON_LITERAL",
                "value": "{\\"minRatio\\":0, \\"minPixels\\": 260}"
            },
            "rightPaneConstraints": {
                "type": "JSON_LITERAL",
                "value": "{\\"minRatio\\": 20, \\"minPixels\\": 400}"
            }
        },
        "slot": null,
        "styles": {
            "width": "100%"
        }
    },
    {
        "definition": {
            "id": "61c315e9ccb8970546c30f3e2da41a32",
            "type": "MACROPONENT_VIEWPORT"
        },
        "elementId": "modalContainerViewport",
        "elementLabel": "Modal Container (Viewport)",
        "eventMappings": [],
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": ""
        },
        "isNonDestructive": false,
        "overrides": {},
        "preset": null,
        "propertyValues": {
            "bare": {
                "binding": {
                    "address": [
                        "bare"
                    ]
                },
                "type": "STATE_BINDING"
            },
            "contents": {
                "binding": {
                    "address": [
                        "contents"
                    ]
                },
                "type": "STATE_BINDING"
            },
            "defaultRoute": {
                "type": "JSON_LITERAL",
                "value": "list_modal_page"
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
            "dynamicTabData": {
                "type": "JSON_LITERAL",
                "value": ""
            },
            "enableResizable": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "resizableMaxHeight": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "resizableMaxWidth": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "resizableMinHeight": {
                "type": "JSON_LITERAL",
                "value": 133
            },
            "resizableMinWidth": {
                "type": "JSON_LITERAL",
                "value": 420
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
        extends: '19be392623033300f4b4c50947bf65ba',
        internal_event_mappings: `{
    "MACROPONENT_PROPERTY_CHANGED": [
        {
            "broker": null,
            "clientScript": {
                "sysId": "a0c0a8ebc3f543501c72b41ed40131f9"
            },
            "declarativeAction": null,
            "event": null,
            "operation": null,
            "targetId": "ckhnzdnaaaaaaaasddhiiggsiibhabuii",
            "type": "CLIENT_SCRIPT"
        },
        {
            "broker": null,
            "clientScript": {
                "sysId": "68c0a8ebc3f543501c72b41ed40131b6"
            },
            "declarativeAction": null,
            "event": null,
            "operation": null,
            "targetId": "ckiggyggbwhhaaaaaaoddgiihhqddbeehhsngg",
            "type": "CLIENT_SCRIPT"
        }
    ],
    "MACROPONENT_READY": [
        {
            "broker": null,
            "clientScript": {
                "sysId": "68c0a8ebc3f543501c72b41ed40131b6"
            },
            "declarativeAction": null,
            "event": null,
            "operation": null,
            "targetId": "ckiggyggccuhhaaaaaanddgiihhddhhmlpiilk",
            "type": "CLIENT_SCRIPT"
        }
    ],
    "sn_uib_base_aw.LIST#NAV_ITEM_SELECTED": [
        {
            "broker": null,
            "clientScript": null,
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
    "sn_uib_base_aw.LIST#OPEN_MODAL": [
        {
            "broker": null,
            "clientScript": {
                "sysId": "e4c0a8ebc3f543501c72b41ed40131bb"
            },
            "declarativeAction": null,
            "event": null,
            "operation": null,
            "targetId": "ckgcbbbvpjaaaaaafddghhaaaggwhqbbnx",
            "type": "CLIENT_SCRIPT"
        }
    ]
}`,
        layout: `{
    "default": {
        "children": null,
        "items": [
            {
                "element_id": "resizable_panes",
                "rules": {},
                "styles": {
                    "grid-area": "main"
                }
            }
        ],
        "root": null,
        "rules": null,
        "styles": {
            "grid-gap": "1rem",
            "grid-template-areas": "\\"main\\"",
            "grid-template-columns": "1fr",
            "grid-template-rows": "minmax(400px,auto)",
            "height": "100%"
        },
        "templateId": "28bde4cd53431010e6bcddeeff7b12cc",
        "type": "grid"
    },
    "version": "3.0.0"
}`,
        name: 'List Page',
        props: `[
    {
        "defaultValue": "",
        "description": null,
        "fieldType": "string",
        "label": "tinyId",
        "mandatory": false,
        "name": "tinyId",
        "readOnly": true,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "description": null,
        "fieldType": "string",
        "label": "listId",
        "mandatory": false,
        "name": "listId",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "description": "List of all user preferences",
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
        "fieldType": "json",
        "label": "screen",
        "mandatory": false,
        "name": "screen",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "description": null,
        "fieldType": "json",
        "label": "activityLogs",
        "mandatory": false,
        "name": "activityLogs",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    }
]`,
        schema_version: '1.0.0',
    },
})
