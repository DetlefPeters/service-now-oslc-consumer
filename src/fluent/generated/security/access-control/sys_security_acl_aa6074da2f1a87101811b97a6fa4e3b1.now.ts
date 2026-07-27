import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['aa6074da2f1a87101811b97a6fa4e3b1'],
    description:
        'Allow read for records in x_2121140_archimat_model_provider, for users with role x_2121140_archimat.user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_2121140_archimat.user'],
    table: 'x_2121140_archimat_model_provider',
})
