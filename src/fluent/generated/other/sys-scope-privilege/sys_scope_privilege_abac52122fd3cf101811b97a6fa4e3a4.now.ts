import { CrossScopePrivilege } from '@servicenow/sdk/core'

CrossScopePrivilege({
    $id: Now.ID['abac52122fd3cf101811b97a6fa4e3a4'],
    operation: 'read',
    status: 'allowed',
    targetName: 'sys_security_acl',
    targetScope: 'global',
    targetType: 'sys_db_object',
})
