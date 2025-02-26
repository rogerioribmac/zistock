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
			onInit: function (oEvent) {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			debugger;

				let uiArea = this.getView().byId("com.ep.zistocks::zz_pv_stock_maraObjectPage--fe::CustomSubSection::StackedChart--uiArea");

				var oModel = new sap.ui.model.json.JSONModel({
					"milk": [{
						  "Store Name": "24-Seven",
						  "Revenue": 428214.13,
						  "Cost": 94383.52,
						  "Consumption": 76855.15368
					  },
					  {
						  "Store Name": "A&A",
						  "Revenue": 1722148.36,
						  "Cost": 274735.17,
						  "Consumption": 310292.22
					  },
					  {
						  "Store Name": "Alexei's Specialities",
						  "Revenue": 1331176.706884,
						  "Cost": 233160.58,
						  "Consumption": 143432.18
					  },
					  {
						  "Store Name": "BC Market",
						  "Revenue": 1878466.82,
						  "Cost": 235072.19,
						  "Consumption": 487910.26
					  },
					  {
						  "Store Name": "Choices Franchise 1",
						  "Revenue": 3326251.94,
						  "Cost": 582543.16,
						  "Consumption": 267185.27
					  },
					  {
						  "Store Name": "Choices Franchise 3",
						  "Revenue": 2090030.97,
						  "Cost": 397952.77,
						  "Consumption": 304964.8856125
					  },
					  {
						  "Store Name": "Choices Franchise 6",
						  "Revenue": 1932991.59,
						  "Cost": 343427.25,
						  "Consumption": 291191.83
					  },
					  {
						  "Store Name": "Dairy World",
						  "Revenue": 752565.16,
						  "Cost": 115844.26,
						  "Consumption": 98268.9597904
					  },
					  {
						  "Store Name": "Delikatessen",
						  "Revenue": 1394072.66,
						  "Cost": 263180.86,
						  "Consumption": 176502.5521223
					  },
					  {
						  "Store Name": "Donald's Market",
						  "Revenue": 3308333.872944,
						  "Cost": 611658.59,
						  "Consumption": 538515.47632832
					  }]
				  });

				//   var oVizFrame1 = this.getView().byId("idDonutChartPriority1"); 
				var oVizFrame1 = this.getView().byId("com.ep.zistocks::zz_pv_stock_maraObjectPage--fe::CustomSubSection::StackedChart--idDonutChartPriority1");
    			
				oVizFrame1.setVizType('bullet');
				oVizFrame1.setUiConfig({
				   "applicationSet": "fiori"
				}); 
		  		
				var oDataset = new sap.viz.ui5.data.FlattenedDataset({
					 dimensions: [{
						 name: "Store Name",
						 value: "{Store Name}"
					 }],
					 measures: [{
						 name: 'Revenue',
						 value: '{Revenue}'
					 },
					 {
						 name: "Cost", // Valor de meta
						 value: "{Cost}"
					 },
					 {
						 name: "Consumption", // Valor comparativo
						 value: "{Consumption}"
					 }],
					 data: {
						 path: "/milk"
					 }
				 });
				 oVizFrame1.setDataset(oDataset);
				 oVizFrame1.setModel(oModel);
	 
				 var feedActualValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "actualValues",
					'type': "Measure",
					'values': ["Revenue"]
				});
				var feedTargetValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "targetValues",
					'type': "Measure",
					'values': ["Cost"]
				});
				var feedComparativeValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "additionalValues",
					'type': "Measure",
					'values': ["Consumption"]
				});
				var feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["Store Name"]
				});
				oVizFrame1.removeAllFeeds();
				oVizFrame1.addFeed(feedActualValues);
				oVizFrame1.addFeed(feedTargetValues);
				oVizFrame1.addFeed(feedComparativeValues);
				oVizFrame1.addFeed(feedCategoryAxis);
				//  var feedSize = new sap.viz.ui5.controls.common.feeds.FeedItem({
				// 		 'uid': "size",
				// 		 'type': "Measure",
				// 		 'values': ["Revenue"]
				// 	 }),
					//  var feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
					// 	 'uid': "color",
					// 	 'type': "Dimension",
					// 	 'values': ["Store Name"]
					//  });
					//  oVizFrame1.addFeed(feedSize);
					//  oVizFrame1.addFeed(feedColor);

			},

			onAfterRendering: function(oEvent){

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
