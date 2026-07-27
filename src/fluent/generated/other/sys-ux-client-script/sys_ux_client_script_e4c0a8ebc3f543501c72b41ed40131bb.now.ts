import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['e4c0a8ebc3f543501c72b41ed40131bb'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        name: 'List Modal',
        required_translations: '[]',
        script: `function handler({
        api,
        event,
        imports,
        helpers
    }) {
    
    const { name, payload: { route, fields, params, size = 'md', ariaLabel }} = event;
    
    if (name === 'LIST#CLOSE_MODAL')
        helpers.modal.close();
    
    else if (name === 'LIST#OPEN_MODAL') {
        if (!route)
            return;
            
        api.setState('bare', true);
        api.setState('displayOptions', { size: size, label: ariaLabel });
        api.setState('contents', {
            route: route,
            fields: fields,
            params: params
        });
    }
    
}`,
        script_api_version: '1.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
