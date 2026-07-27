import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a0c0a8ebc3f543501c72b41ed40131f9'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '10c0a8abc3f543501c72b41ed40131f3',
        name: 'Refresh List',
        required_translations: '[]',
        script: `function handler({
      api,
      event: {
          payload,
          payload: {
              name,
              value,
              previousValue
          }
      },
      helpers,
      imports
    }) {
      if (name === 'screen' &&
          value.isActive != previousValue.isActive
          && value.isActive
          && api.state.hasRecordChanges) {
          api.setState('hasRecordChanges', false);
          api.setState('listRefresh', { timestamp: Date.now(), background: true });
      }
      if (name === 'activityLogs' && value && value.size > 0) {
        const operationList = ['modified', 'updated', 'inserted', 'deleted', 'closed'];
        // Transform "value" and get the latest entry
        const map = Array.from(value).pop()[1];
        const crudActivitiesLen = map.activities.get('crud').length;
        if (crudActivitiesLen < 1)
            return;
        const {
            operation,
            sysId,
            timestamp
        } = map.activities.get('crud')[crudActivitiesLen - 1];
        if (operationList.includes(operation) &&
            sysId !== "-1" &&
            !api.context.props.screen.isActive &&
            !api.state.hasRecordChanges) {
            api.setState('hasRecordChanges', true);
        }
    }
}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
