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
InoOSLCImporter.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    importDiagramsAjax: function() {
        // TODO: Replace with actual OSLC import logic
        // e.g. var importer = new x_1937158_archim_0.InoOSLCImporter();
        // var count = importer.importDiagrams();
        var count = 0;
        gs.info('InoOSLCImporter.importDiagramsAjax called');
        return JSON.stringify({ count: count });
    },

    type: 'InoOSLCImporter'
});`,
})
