import { UxListMenuConfig, Applicability, Role } from '@servicenow/sdk/core'

// --- Role ---
const archimateUser = Role({
    $id: Now.ID['x_2121140_archimat.user'],
    name: 'x_2121140_archimat.user',
    containsRoles: ['canvas_user'],
})

// --- Applicability ---
const archimateApplicability = Applicability({
    $id: Now.ID['archimate_applicability'],
    name: 'ArchiMate Workspace Users',
    roles: [archimateUser],
})

// --- List Menu Configuration ---
export const archimateListConfig = UxListMenuConfig({
    $id: Now.ID['archimate_list_config'],
    name: 'ArchiMate Workspace List Configuration',
    description: 'Navigation for ArchiMate Workspace',
    categories: [
        {
            $id: Now.ID['archimate_diagrams_category'],
            title: 'Diagrams',
            order: 10,
            lists: [
                {
                    $id: Now.ID['archimate_diagrams_all'],
                    title: 'All Diagrams',
                    order: 10,
                    condition: '',
                    table: 'x_2121140_archimat_diagram',
                    columns: 'u_diagram_name,u_diagram_type,u_diagram_id',
                    applicabilities: [
                        {
                            $id: Now.ID['archimate_diagrams_all_applicability'],
                            applicability: archimateApplicability,
                        },
                    ],
                },
            ],
        },
        {
            $id: Now.ID['archimate_elements_category'],
            title: 'Model Elements',
            order: 20,
            lists: [
                {
                    $id: Now.ID['archimate_elements_all'],
                    title: 'All Elements',
                    order: 10,
                    condition: '',
                    table: 'x_2121140_archimat_model_element',
                    columns:
                        'u_element_name,u_element_type,u_element_id',
                    applicabilities: [
                        {
                            $id: Now.ID['archimate_elements_all_applicability'],
                            applicability: archimateApplicability,
                        },
                    ],
                },
            ],
        },
        {
            $id: Now.ID['archimate_relationships_category'],
            title: 'Relationships',
            order: 30,
            lists: [
                {
                    $id: Now.ID['archimate_relationships_all'],
                    title: 'All Relationships',
                    order: 10,
                    condition: '',
                    table: 'x_2121140_archimat_model_relationship',
                    columns:
                        'u_source_element,u_relationship_type,u_target_element',
                    applicabilities: [
                        {
                            $id: Now.ID['archimate_relationships_all_applicability'],
                            applicability: archimateApplicability,
                        },
                    ],
                },
            ],
        },
    ],
})
