import { ScriptInclude } from '@servicenow/sdk/core'

// Client-callable Script Include for OSLC diagram import
// Called via GlideAjax from the "Get from Innovator" list button
ScriptInclude({
    $id: Now.ID['ino_oslc_importer_si'],
    name: 'InoOSLCImporter',
    active: true,
    clientCallable: true,
    description: 'AJAX endpoint for importing ArchiMate diagrams from MID Innovator via OSLC',
    script: `var InoOSLCImporter = Class.create();
InoOSLCImporter.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    /**
     * Returns a JSON array of model providers for the dropdown selection.
     * Each entry has: sys_id, name, provider_id
     */
    getProviders: function() {
        var providers = [];
        var gr = new GlideRecord('x_2121140_archimat_model_provider');
        gr.orderBy('u_name');
        gr.query();
        while (gr.next()) {
            providers.push({
                sys_id: gr.getUniqueValue(),
                name: gr.getValue('u_name'),
                provider_id: gr.getValue('u_provider_id')
            });
        }
        gs.info(providers);
        return JSON.stringify(providers);
    },

    /**
     * Imports diagrams from the specified provider.
     * Expects sysparm_provider_id (the u_provider_id integer value).
     */
    importDiagramsAjax: function() {
        var providerId = this.getParameter('sysparm_provider_id');
        // TODO: Replace with actual OSLC import logic using the provider ID
        // e.g. var importer = new x_1937158_archim_0.InoOSLCImporter();
        // var count = importer.importDiagrams(providerId);
        var count = 0;
        gs.info('InoOSLCImporter.importDiagramsAjax called with provider_id: ' + providerId);
        return JSON.stringify({ count: count, provider_id: providerId });
    },

    type: 'InoOSLCImporter'
});`,
})
