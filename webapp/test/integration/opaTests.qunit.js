sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ep/zistocks/test/integration/FirstJourney',
		'com/ep/zistocks/test/integration/pages/zz_pv_stock_maraList',
		'com/ep/zistocks/test/integration/pages/zz_pv_stock_maraObjectPage',
		'com/ep/zistocks/test/integration/pages/zz_pv_stock_zite_itecObjectPage'
    ],
    function(JourneyRunner, opaJourney, zz_pv_stock_maraList, zz_pv_stock_maraObjectPage, zz_pv_stock_zite_itecObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/ep/zistocks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThezz_pv_stock_maraList: zz_pv_stock_maraList,
					onThezz_pv_stock_maraObjectPage: zz_pv_stock_maraObjectPage,
					onThezz_pv_stock_zite_itecObjectPage: zz_pv_stock_zite_itecObjectPage
                }
            },
            opaJourney.run
        );
    }
);