sap.ui.define(["sap/ui/core/mvc/ControllerExtension"], function (ControllerExtension) {
    "use strict";

    return ControllerExtension.extend("com.ep.zistocks.ext.controller.ObjControllerExtension", {
        override: {
            onInit: function (oEvent) {},

            onPageReady: function (oEvent) {

                var oTable = this.base.byId("com.ep.zistocks::zz_pv_stock_zite_plantsObjectPage--fe::table::_assets::LineItem");
                
                if (oTable) {
                    if (oTable.getFilterConditions().StorageLocation) {
                        oTable.setFilterConditions();
                        oTable.rebind();
                    }
                }

                let oChart = this.getView().byId("com.ep.zistocks::zz_pv_stock_zite_materialsObjectPage--fe::CustomSubSection::BulletChart--idMonthVizFrame");
                if (oChart) {
                    let oHeaderContent = this.getView().byId("com.ep.zistocks::zz_pv_stock_zite_materialsObjectPage--fe::HeaderContentContainer");
                    
                    if (oHeaderContent) {
                        let sMaterialNo = oHeaderContent.getBindingContext().getProperty("materialNo");
                        let sDG = oHeaderContent.getBindingContext().getProperty("DG");
                        
                        if (sMaterialNo) {
                            var oFilter = new sap.ui.model.Filter({
                                filters: [
                                    new sap.ui.model.Filter("materialNo", sap.ui.model.FilterOperator.EQ, sMaterialNo),
                                    new sap.ui.model.Filter("DG", sap.ui.model.FilterOperator.EQ, sDG)
                                ],
                                and: true
                            });
                            
                            var oSingleFilter = new sap.ui.model.Filter("materialNo", sap.ui.model.FilterOperator.EQ, sMaterialNo);
                            oChart.getDataset().getBinding("data").filter();
                            oChart.getDataset().getBinding("data").filter(oFilter);
                            oChart.getDataset().updateBindings(true);
                        }
                    }
                }

                var oSorter = new sap.ui.model.Sorter({
                    path: 'Quantity', 
                    descending: true 
                });

                let oDonut = this.getView().byId("com.ep.zistocks::zz_pv_stock_zite_plantsObjectPage--fe::CustomSubSection::DonutChart--idDonutChart");
                if (oDonut){
                    oDonut.getBinding("segments").sort(oSorter);
                }

                debugger;

            }
        }
    });
});