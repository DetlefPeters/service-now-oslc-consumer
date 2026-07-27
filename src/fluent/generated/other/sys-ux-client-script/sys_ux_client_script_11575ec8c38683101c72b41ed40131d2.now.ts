import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['11575ec8c38683101c72b41ed40131d2'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '6457dac8c38683101c72b41ed40131d0',
        name: 'simpleListModal',
        required_translations: '[]',
        script: `function handler({
        api,
        event,
        imports,
        helpers
    }) {
    
    const { name, payload: { route, fields, params, size = 'md', ariaLabel }} = event;
    
    if (name === 'SIMPLE_LIST#OPEN_MODAL') {
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
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
