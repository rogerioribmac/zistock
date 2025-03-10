sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onThezz_pv_stock_zite_materialsList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onThezz_pv_stock_zite_materialsList.onFilterBar().iExecuteSearch();
                
                Then.onThezz_pv_stock_zite_materialsList.onTable().iCheckRows();

                When.onThezz_pv_stock_zite_materialsList.onTable().iPressRow(0);
                Then.onThezz_pv_stock_zite_materialsObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});