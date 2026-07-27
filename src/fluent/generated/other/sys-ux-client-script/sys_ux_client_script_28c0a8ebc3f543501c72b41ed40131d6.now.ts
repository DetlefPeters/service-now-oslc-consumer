import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['28c0a8ebc3f543501c72b41ed40131d6'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        name: 'Update browser title',
        required_translations: '[]',
        script: `/**
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {any} params.imports
 * @param {ApiHelpers} params.helpers
 */
function handler({api, event, helpers, imports}) {
    const { title } = event.payload;
    if (title) {
        api.emit("CONTENT_UPDATED", {
            title: event.payload.title
        });
    }
}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
