import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3f88f0de2f5a87101811b97a6fa4e315'],
    description:
        'Allow read for records in x_2121140_archimat_model_relationship, for users with role x_2121140_archimat.user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_2121140_archimat.user'],
    table: 'x_2121140_archimat_model_relationship',
})
