sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('com.ep.zistocks.ext.controller.AssetsExtension', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf com.ep.zistocks.ext.controller.AssetsExtension
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
				debugger;
			},

			onPageReady: function(oEvent){
				var oTable = this.base.byId("com.ep.zistocks::zz_pv_stock_zite_itecObjectPage--fe::table::_assets::LineItem");
            	if (oTable){
					if (oTable.getFilterConditions().StorageLocation){
						debugger;
						oTable.setFilterConditions();
						oTable.rebind();
					}
				}
			}
	
		}
	});
});
