import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['20c0a8ebc3f543501c72b41ed40131fe'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        name: 'Update List Navigation IDs',
        required_translations: '[]',
        script: `/**
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {any} params.imports
 */
function handler({api, event, helpers, imports}) {
    const {tinyId, listId} = event.payload;

    if (tinyId) {
			api.setState('tinyId', tinyId);
    }
    if (listId) {
			api.setState('listId', listId);
    }
}`,
        script_api_version: '1.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
