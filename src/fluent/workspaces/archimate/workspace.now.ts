import { Workspace, Acl } from '@servicenow/sdk/core'
import { archimateListConfig } from './list-menu.now'

// --- Workspace ---
export const archimateWorkspace = Workspace({
    $id: Now.ID['archimate_workspace'],
    title: 'ArchiMate Viewer',
    path: 'archimate',
    tables: [
        'x_2121140_archimat_oslc_diagram',
        'x_2121140_archimat_oslc_model_element',
        'x_2121140_archimat_oslc_model_relationship',
    ],
    listConfig: archimateListConfig,
    defaultRecordOverrides: {
        sys_ux_screen_14463396c49c41799d447545a81d0608: {
            active: 'true',
            name: 'List Page',
            description: '',
            order: '0',
            macroponent: '2c08111d0fc21010036a83fa68767ef6',
            parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
            screen_condition: '',
            screen_type: 'a07101a9032b4887ab3322cc8007eed4',
            app_config: 'ec99290299654743a3412827bd28fc62',
            macroponent_config:
                '{"bare":{"type":"JSON_LITERAL","value":true},"headerLevel":{"type":"JSON_LITERAL","value":"1"},"headingOnlyVisibleToScreenReaders":{"type":"JSON_LITERAL","value":false},"interceptNotifications":{"type":"JSON_LITERAL","value":false},"label":{"type":"TRANSLATION_LITERAL","value":{"code":null,"comment":"","message":""}},"propagateNotifications":{"type":"JSON_LITERAL","value":false},"scrollable":{"type":"JSON_LITERAL","value":"y"}}',
            disable_auto_reflow: 'false',
            disable_interoperable: 'false',
            event_mappings: '[]',
            required_translations: '[]',
            rollback_screen: '',
        },
        sys_ux_screen_905e8272410544098f48dbd40f4a7a11: {
            active: 'true',
            name: 'Simple List',
            description: '',
            order: '0',
            macroponent: '8515f3e853031010ffa5ddeeff7b1297',
            parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
            screen_condition: '',
            screen_type: '5b41b9bf0a6e478c8161bd990a73fc55',
            app_config: 'ec99290299654743a3412827bd28fc62',
            macroponent_config:
                '{"bare":{"type":"JSON_LITERAL","value":true},"headerLevel":{"type":"JSON_LITERAL","value":"1"},"headingOnlyVisibleToScreenReaders":{"type":"JSON_LITERAL","value":false},"interceptNotifications":{"type":"JSON_LITERAL","value":false},"label":{"type":"TRANSLATION_LITERAL","value":{"code":null,"comment":"","message":""}},"propagateNotifications":{"type":"JSON_LITERAL","value":false},"scrollable":{"type":"JSON_LITERAL","value":"y"}}',
            disable_auto_reflow: 'false',
            disable_interoperable: 'false',
            event_mappings: '[]',
            required_translations: '[]',
            rollback_screen: '',
        },
    },
})

// --- ACL for workspace route ---
Acl({
    $id: Now.ID['archimate_workspace_acl'],
    localOrExisting: 'Existing',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_2121140_archimat.user'],
    name: 'archimate',
})
