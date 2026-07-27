import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['e9575ec8c38683101c72b41ed40131d6'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '6457dac8c38683101c72b41ed40131d0',
        name: 'Translate list title',
        required_translations: '[]',
        script: `/**
  * @param {params} params
  * @param {api} params.api
  * @param {TransformApiHelpers} params.helpers
  */
function evaluateProperty({api, helpers}) {
   let translatedListTitle = helpers.translateSync(api.context.props.listTitle);
   return translatedListTitle;
}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'transform',
    },
})
