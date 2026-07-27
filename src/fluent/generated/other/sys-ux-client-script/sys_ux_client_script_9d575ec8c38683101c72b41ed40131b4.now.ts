import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9d575ec8c38683101c72b41ed40131b4'],
    table: 'sys_ux_client_script',
    data: {
        includes: 'e75113c0c3302010de10a0f89d40dd0e',
        macroponent: '6457dac8c38683101c72b41ed40131d0',
        name: 'simpleListUserPrefState',
        required_translations: '[]',
        script: `/**
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {any} params.imports
 */
function handler({api, event, helpers, imports}) {
    // event name
    const eventName = event.name;
    
    // import the getUserPreference method from userPreferenceUtils script includes
    const {
        getUserPreference
    } = imports["sn_record_page.userPreferenceUtils"](api.context.props.userPrefs);

    /**
     * setWrapListText - toggle the srap list text behavior
     */
    const setWrapListText = () => {
        // show preference name constant
        const WRAP_LIST_TEXT_PREF_NAME = "workspace.wrapListText";

        // fetch the user's wrap list text preference value
        const pref = getUserPreference(WRAP_LIST_TEXT_PREF_NAME);

        api.setState('wrapListText', pref);
    };

    // handle the wrap list text collapsed state based on the macroponent ready & 
    // macroponent property change events
    switch(eventName) {
        case 'MACROPONENT_READY':
            setWrapListText();
            break;

        case 'MACROPONENT_PROPERTY_CHANGED':
            if(event.payload.name === 'userPrefs') 
                setWrapListText();    

            break;

        default:
            break;
    }
}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
