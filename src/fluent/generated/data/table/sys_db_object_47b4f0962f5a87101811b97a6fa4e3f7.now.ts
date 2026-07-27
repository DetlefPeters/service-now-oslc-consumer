import { Table } from '@servicenow/sdk/core'

export const x_2121140_archimat_model_element = Table({
    actions: ['read', 'update', 'create'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    label: 'Model Element',
    name: 'x_2121140_archimat_model_element',
    schema: {},
})
