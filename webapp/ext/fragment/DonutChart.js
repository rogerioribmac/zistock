sap.ui.define(["sap/m/MessageToast"], function (MessageToast) {
    "use strict";

    return {
        onSelectionChanged: function (oEvent) {
            let aFilters = [];
            let aSelectedSegments = oEvent.getParameter("selectedSegments");

            for (let i = 0; i < aSelectedSegments.length; i++) {
                aFilters.push({
                    operator: "EQ",
                    validated: "NotValidated",
                    values: [aSelectedSegments[i].getProperty("label").slice(0, 4)]
                });
            }

            var oTable = this.byId("com.ep.zistocks::zz_pv_stock_zite_plantsObjectPage--fe::table::_assets::LineItem");
            
            if (oTable) {
                if (aFilters.length) {
                    var oFilterConditions = { StorageLocation: aFilters };
                    oTable.setFilterConditions(oFilterConditions);
                } else {
                    oTable.setFilterConditions();
                }
                oTable.rebind();
            }
        }
    };
});


