import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['c2013c1e2f1a87101811b97a6fa4e375'],
    description: 'Allow read for records in x_2121140_archimat_diagram, for users with role x_2121140_archimat.user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_2121140_archimat.user'],
    table: 'x_2121140_archimat_diagram',
})
