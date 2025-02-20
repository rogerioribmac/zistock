sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.ep.zistocks',
            componentId: 'zz_pv_stock_maraObjectPage',
            contextPath: '/zz_pv_stock_mara'
        },
        CustomPageDefinitions
    );
});