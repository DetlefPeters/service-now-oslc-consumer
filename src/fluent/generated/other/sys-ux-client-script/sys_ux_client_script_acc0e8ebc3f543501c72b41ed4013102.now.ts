import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['acc0e8ebc3f543501c72b41ed4013102'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        name: 'Finish navigation for route parent tables',
        required_translations: '[]',
        script: `/**
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {any} params.imports
 */
function handler({api, event, helpers, imports}) { 
    const trueUpTableInfo = api.data.resolve_route_parent_tables.output; 
    const payload = api.state.navigationPayload; 
    let newPayload = payload; 
    if(trueUpTableInfo && payload) { 
        const {table, sysId, title} = trueUpTableInfo; 
        newPayload = {...payload, fields: {...payload.fields, table, sysId}, title}; 
    } 
    api.emit('NAV_ITEM_SELECTED', newPayload); 
}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
