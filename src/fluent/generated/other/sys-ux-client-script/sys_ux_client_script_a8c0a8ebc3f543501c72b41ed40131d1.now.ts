import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a8c0a8ebc3f543501c72b41ed40131d1'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        name: 'List CRUD',
        required_translations: '[]',
        script: `/**
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {any} params.imports
 */
function handler({api, event, imports}) {
  let type = '';
	if(event.name === "NOW_RECORD_LIST_CONNECTED#SAVE_AS_REQUESTED") {
		type = "CREATE";
	}
	else if (event.name  ===  "NOW_RECORD_LIST_CONNECTED#DELETE_REQUESTED") {
		type = "DESTROY";
	}
	else if (event.name  ===  "NOW_RECORD_LIST_CONNECTED#RENAME_REQUESTED" ||  event.name  ===  "NOW_RECORD_LIST_CONNECTED#EDIT_COLUMNS_REQUESTED" || event.name  === "NOW_RECORD_LIST_CONNECTED#SAVE_REQUESTED") {
		type = "UPDATE";
	}

	const CRUD = {
		type: type,
		options: event.payload.update,
		timestamp: event.payload.timestamp
	};
	
	api.setState('CRUD', CRUD);
}`,
        script_api_version: '1.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
