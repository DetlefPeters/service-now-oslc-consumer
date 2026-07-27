import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['58c0a8ebc3f543501c72b41ed40131a2'],
    table: 'sys_ux_client_script',
    data: {
        includes: 'e75113c0c3302010de10a0f89d40dd0e',
        macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        name: 'listSetPrefState',
        required_translations: '[]',
        script: `/**
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {any} params.imports
 */
function handler({
    api,
    event,
    helpers,
    imports
}) {
    if (event.payload.interaction === "USER_ACTION") {
        const listDividerPosition = event.payload.dividerPosition;
        const listPreference = api.state.listRatioPreference;
        
        api.setState('listDividerPosition', listDividerPosition);

        api.data.setListPreference.execute({
            'name': listPreference,
            'value': listDividerPosition
        });    
    }
}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
