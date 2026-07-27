import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['64c0a8ebc3f543501c72b41ed40131c0'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        name: 'ListMenu Toggle',
        required_translations: '[]',
        script: `/**
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {any} params.imports
 */
function handler({api, event, helpers, imports}) {
    const listPreference = api.state.listMenuOpenPreference;
    const open = event.payload.listMenuOpen;

    api.setState('listMenuOpen', open);
    api.setState('listDisplayPanes', open? 'both': 'right');
 
    api.data.setListPreference.execute({
        'name': listPreference,
        'value': open
    });    
}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
