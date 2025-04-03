sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('com.ep.zistocks.ext.controller.PlantsPageExtension', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf com.ep.zistocks.ext.controller.PlantsPageExtension
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},

			onPageReady: function (oEvent) {

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

            }
		}
	});
});
