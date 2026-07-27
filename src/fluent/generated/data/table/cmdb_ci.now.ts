import { Table, StringColumn } from '@servicenow/sdk/core'

export const cmdb_ci = Table({
    augments: 'cmdb_ci',
    schema: {
        x_2121140_archimat_u_archimate_id: StringColumn({
            label: 'Archimate ID',
            maxLength: 128,
        }),
    },
})
