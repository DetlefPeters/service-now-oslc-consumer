import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f0e9baa32f3707501811b97a6fa4e3f0'],
    description:
        'Allow query_match for records in x_2121140_archimat_model_provider, for users with role x_2121140_archimat.user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'query_match',
    roles: ['x_2121140_archimat.user'],
    table: 'x_2121140_archimat_model_provider',
})
