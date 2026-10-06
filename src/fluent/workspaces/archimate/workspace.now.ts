import { Workspace, Acl } from '@servicenow/sdk/core'
import { archimateListConfig } from './list-menu.now'

// --- Workspace ---
export const archimateWorkspace = Workspace({
    $id: Now.ID['archimate_workspace'],
    title: 'ArchiMate Viewer',
    path: 'archimate',
    tables: ['x_2121140_archimat_diagram', 'x_2121140_archimat_model_element', 'x_2121140_archimat_model_relationship'],
    listConfig: archimateListConfig,
    defaultRecordOverrides: {
        sys_ux_screen_9e689784ca724ba78abdc28d3ccce7a2: {
            active: 'true',
            name: 'List Page',
            description: '',
            order: '0',
            macroponent: '2c08111d0fc21010036a83fa68767ef6',
            parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
            screen_condition: '',
            screen_type: 'a24bf864a0ec4194b7de4cff23095dab',
            app_config: 'd248bf058c9344898838f201df8c1857',
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
