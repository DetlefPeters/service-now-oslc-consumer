import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d1575ec8c38683101c72b41ed40131bc'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '6457dac8c38683101c72b41ed40131d0',
        name: 'Update tab title',
        required_translations: '[]',
        script: `/**
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {any} params.imports
 */ 
function handler({api, event, helpers, imports}) {
    if (!api.context.props.listTitle)
        return;

    const setTabTitle = (title) => {
        api.emit('SCREEN_STATUS_CHANGED', { 
            'title': title
        });
    };

    switch (event.name) {
      case 'MACROPONENT_PROPERTY_CHANGED':
        if (event.payload.name === 'listTitle')
          setTabTitle(api.context.props.listTitle);
        break;
      case 'MACROPONENT_READY':
        setTabTitle(api.context.props.listTitle);
        break;
    }
}
`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
