sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.ep.zistocks',
            componentId: 'zz_pv_stock_zite_materialsObjectPage',
            contextPath: '/zz_pv_stock_zite_materials'
        },
        CustomPageDefinitions
    );
});