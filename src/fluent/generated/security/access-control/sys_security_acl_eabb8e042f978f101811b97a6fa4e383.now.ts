import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['eabb8e042f978f101811b97a6fa4e383'],
    description: 'Allow read for records in cmdb_ci, for users with role admin.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['admin'],
    table: 'cmdb_ci',
})
