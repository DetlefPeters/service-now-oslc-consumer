import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_2121140_archimat_model_provider',
    view: default_view,
    columns: [
        'u_name',
        'u_base_url',
        'u_provider_id',
        'u_service_provider_url',
        'sys_created_on',
        'sys_created_by',
        'sys_updated_on',
        'sys_updated_by',
        'sys_mod_count',
    ],
})
