import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['2cc0e8ebc3f543501c72b41ed4013107'],
    table: 'sys_ux_client_script',
    data: {
        includes: '58d17acf0b531010a8b1c96237673a68',
        macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        name: 'Open Record From List',
        required_translations: '[]',
        script: `function handler({
    api,
    helpers,
    event,
    imports
}) {
    const {
        routeMapping,
        buildDefaultRoutePayload
    } = imports["global.recordRoutesMapping"]();

    var route = 'record';
    var targetRoute = '';
    const defaultRoutePayload = buildDefaultRoutePayload(route, targetRoute, event);
    
    const routeMap = api.data.dynamic_routing_list.routeMap;
    const payload = routeMapping(routeMap, defaultRoutePayload, event);

    // If a table name passed into trueupTable matches the existing table
    // refresh trueup DR to get real table name; otherwise use existing.
    if(api.state.routeParentTables && api.state.routeParentTables.split(',').find(table => table === payload.fields.table)) {
        api.setState('navigationPayload', payload); 
        api.data.resolve_route_parent_tables.refresh(); 
    } else { 
        api.emit('NAV_ITEM_SELECTED', payload); 
    } 

}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
