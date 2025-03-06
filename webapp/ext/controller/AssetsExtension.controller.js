sap.ui.define([
		'sap/ui/core/mvc/ControllerExtension',
	    'sap/viz/ui5/format/ChartFormatter',
		'sap/ui/core/HTML'
], function (ControllerExtension,ChartFormatter,HTMLControl) {
	'use strict';

	return ControllerExtension.extend('com.ep.zistocks.ext.controller.AssetsExtension', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf com.ep.zistocks.ext.controller.AssetsExtension
             */
			onInit: function (oEvent) {

			},

			onPageReady: function(oEvent){

				var oTable = this.base.byId("com.ep.zistocks::zz_pv_stock_zite_itecObjectPage--fe::table::_assets::LineItem");
            	if (oTable){
					if (oTable.getFilterConditions().StorageLocation){
						
						oTable.setFilterConditions();
						oTable.rebind();
					}
				}

				let oVizFrame = this.getView().byId("com.ep.zistocks::zz_pv_stock_maraObjectPage--fe::CustomSubSection::StackedChart--idMonthVizFrame");
				if (oVizFrame){
					let oHeaderContainer = this.getView().byId("com.ep.zistocks::zz_pv_stock_maraObjectPage--fe::HeaderContentContainer");
					if (oHeaderContainer){
						let sMaterial = oHeaderContainer.getBindingContext().getProperty("materialNo");
						if (sMaterial){
							var oFilterMaterial =new sap.ui.model.Filter("materialNo",sap.ui.model.FilterOperator.EQ,sMaterial);
							oVizFrame.getDataset().getBinding("data").filter();
							oVizFrame.getDataset().getBinding("data").filter(oFilterMaterial);
							oVizFrame.getDataset().updateBindings(true);

							let fOnDataLoad = function (oEvent) {
								var oModel = oEvent.getSource().getModel();
								var oData = oModel.oData;
							};
							oVizFrame.getDataset().getBinding("data").attachChange(fOnDataLoad, this);
							
						}
					}
				}
			}
	
		}
	});
});
