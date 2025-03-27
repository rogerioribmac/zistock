sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {

        onSelectionChanged: function (oEvent) {

            let aStorLocation = [];
            let oSegments = oEvent.getParameter("selectedSegments");
            for (let i=0; i<oSegments.length; i++){
                aStorLocation.push({ operator :"EQ", validated: "NotValidated", values: [oSegments[i].getProperty("label").slice(0, 4)]});
            }

            var oTable = this.byId("com.ep.zistocks::zz_pv_stock_zite_plantsObjectPage--fe::table::_assets::LineItem");
            if (oTable){
                if (aStorLocation.length){
                    var oFilter = {"StorageLocation": aStorLocation };
                    oTable.setFilterConditions(oFilter);
                } else {
                    oTable.setFilterConditions();
                }
                oTable.rebind();
            }

		},

        onSegmentedChange: function(oEvent){
            debugger;
        }
        
    };
});
