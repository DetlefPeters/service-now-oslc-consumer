import { Dashboard } from '@servicenow/sdk/core'
import { archimateWorkspace } from './workspace.now'

// --- Dashboard ---
Dashboard({
    $id: Now.ID['archimate_dashboard'],
    name: 'ArchiMate Viewer Dashboard',
    tabs: [
        {
            $id: Now.ID['archimate_dashboard_overview_tab'],
            name: 'Overview',
            widgets: [
                {
                    $id: Now.ID['archimate_total_diagrams_widget'],
                    component: 'single-score',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Diagrams',
                                sourceType: 'table',
                                tableOrViewName: 'x_2121140_archimat_diagram',
                                filterQuery: '',
                                id: 'data_source_diagrams',
                            },
                        ],
                        headerTitle: 'Total Diagrams',
                        metrics: [
                            {
                                dataSource: 'data_source_diagrams',
                                id: 'metric_diagrams_count',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 14,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['archimate_diagrams_by_type_widget'],
                    component: 'vertical-bar',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Diagrams',
                                sourceType: 'table',
                                tableOrViewName: 'x_2121140_archimat_diagram',
                                filterQuery: '',
                                id: 'data_source_diagrams_type',
                            },
                        ],
                        headerTitle: 'Diagrams by Type',
                        metrics: [
                            {
                                dataSource: 'data_source_diagrams_type',
                                id: 'metric_diagrams_type_count',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'data_source_diagrams_type',
                                        groupByField: 'u_diagram_type',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 17,
                    position: { x: 14, y: 0 },
                },
                {
                    $id: Now.ID['archimate_elements_by_type_widget'],
                    component: 'vertical-bar',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Model Elements',
                                sourceType: 'table',
                                tableOrViewName: 'x_2121140_archimat_model_element',
                                filterQuery: '',
                                id: 'data_source_elements_type',
                            },
                        ],
                        headerTitle: 'Elements by Type',
                        metrics: [
                            {
                                dataSource: 'data_source_elements_type',
                                id: 'metric_elements_type_count',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'data_source_elements_type',
                                        groupByField: 'u_element_type',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 17,
                    position: { x: 31, y: 0 },
                },
            ],
        },
    ],
    visibilities: [
        {
            $id: Now.ID['archimate_dashboard_visibility'],
            experience: archimateWorkspace,
        },
    ],
    permissions: [],
})
