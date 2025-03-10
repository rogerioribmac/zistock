sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ep/zistocks/test/integration/FirstJourney',
		'com/ep/zistocks/test/integration/pages/zz_pv_stock_zite_materialsList',
		'com/ep/zistocks/test/integration/pages/zz_pv_stock_zite_materialsObjectPage',
		'com/ep/zistocks/test/integration/pages/zz_pv_stock_zite_plantsObjectPage'
    ],
    function(JourneyRunner, opaJourney, zz_pv_stock_zite_materialsList, zz_pv_stock_zite_materialsObjectPage, zz_pv_stock_zite_plantsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/ep/zistocks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThezz_pv_stock_zite_materialsList: zz_pv_stock_zite_materialsList,
					onThezz_pv_stock_zite_materialsObjectPage: zz_pv_stock_zite_materialsObjectPage,
					onThezz_pv_stock_zite_plantsObjectPage: zz_pv_stock_zite_plantsObjectPage
                }
            },
            opaJourney.run
        );
    }
);