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

				var oModel = new sap.ui.model.json.JSONModel({
					"milk": [{
						  "Store Name": "24-Seven",
						  "Revenue": 428214.13,
						  "Cost": 94383.52,
						  "Consumption": 76855.15368,
						  "NewField1": 943837.00,
						  "NewField2": 200.00
					  },
					  {
						  "Store Name": "A&A",
						  "Revenue": 1722148.36,
						  "Cost": 274735.17,
						  "Consumption": 310292.22,
						  "NewField1": 10000.00,
						  "NewField2": 200.00
					  },
					  {
						  "Store Name": "Alexei's Specialities",
						  "Revenue": 1331176.706884,
						  "Cost": 233160.58,
						  "Consumption": 143432.18,
						  "NewField1": 10000.00,
						  "NewField2": 200.00
					  },
					  {
						  "Store Name": "BC Market",
						  "Revenue": 1878466.82,
						  "Cost": 235072.19,
						  "Consumption": 487910.26,
						  "NewField1": 10000.00,
						  "NewField2": 200.00
					  },
					  {
						  "Store Name": "Choices Franchise 1",
						  "Revenue": 3326251.94,
						  "Cost": 582543.16,
						  "Consumption": 267185.27,
						  "NewField1": 10000.00,
						  "NewField2": 200.00
					  },
					  {
						  "Store Name": "Choices Franchise 3",
						  "Revenue": 2090030.97,
						  "Cost": 397952.77,
						  "Consumption": 304964.8856125,
						  "NewField1": 10000.00,
						  "NewField2": 200.00
					  },
					  {
						  "Store Name": "Choices Franchise 6",
						  "Revenue": 1932991.59,
						  "Cost": 343427.25,
						  "Consumption": 291191.83,
						  "NewField1": 10000.00,
						  "NewField2": 200.00
					  },
					  {
						  "Store Name": "Dairy World",
						  "Revenue": 752565.16,
						  "Cost": 115844.26,
						  "Consumption": 98268.9597904,
						  "NewField1": 10000.00,
						  "NewField2": 200.00
					  },
					  {
						  "Store Name": "Delikatessen",
						  "Revenue": 1394072.66,
						  "Cost": 263180.86,
						  "Consumption": 176502.5521223,
						  "NewField1": 10000.00,
						  "NewField2": 200.00
					  },
					  {
						  "Store Name": "Donald's Market",
						  "Revenue": 3308333.872944,
						  "Cost": 611658.59,
						  "Consumption": 538515.47632832,
						  "NewField1": 10000.00,
						  "NewField2": 200.00
					  }]
				  });

				var oVizFrame1 = this.getView().byId("com.ep.zistocks::zz_pv_stock_maraObjectPage--fe::CustomSubSection::StackedChart--idDonutChartPriority1");
    			
				oVizFrame1.setVizType('bullet');
				oVizFrame1.setUiConfig({
				   "applicationSet": "fiori"
				}); 
		  		
				var oDataset = new sap.viz.ui5.data.FlattenedDataset({
					 dimensions: [{
						 name: 'Store Name',
						 value: "{Store Name}"
					 }],
					 measures: [{
						 name: 'Available',
						 value: '{Revenue}'
					 },
					 {
						 name: 'Safety stock', // Valor de meta
						 value: "{Cost}"
					 },
					 {
						 name: 'Not delivered', // Valor comparativo
						 value: "{Consumption}"
					 },
					 {
						 name: 'Unavailable & Commited',
						 value: "{NewField1}"
					 }],
					 data: {
						 path: "/milk"
					 }
				 });
				 oVizFrame1.setDataset(oDataset);
				 oVizFrame1.setModel(oModel);
				 
				 debugger;
				 var chartData = oVizFrame1.getAggregation("dataset").getBinding("data").oList;
				 window.localStorage.setItem("chartData", JSON.stringify(chartData));
				// var datasetRadio = oEvent.getSource();
				// var bindValue = datasetRadio.getBindingContext().getObject();
				var oPopOver = new sap.viz.ui5.controls.Popover({
					'customDataControl' : function(data){
						debugger;
						var chartData = JSON.parse(window.localStorage.getItem("chartData"));

						// Line that shows the price

						// divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'><span style = 'float: right'>" + chartData[data.target.dataset.id]['NewField1']
						// "</span></div><br>";

						// // Line that shows the date

						// divStr = divStr + "<div style = 'margin: 5px 30px 15px 30px'><span style = 'float: right'>" + chartData[data.target.dataset.id]['NewField2'] + "</span></div>";

						var values = data.data.val, divStr = "", idx = values[1].value;
						var svg = "<svg width='10px' height='10px'><path d='M-5,-5L5,-5L5,5L-5,5Z' fill='#5cbae6' transform='translate(5,5)'></path></svg>";
						divStr = divStr + "<div style = 'margin: 15px 30px 0 10px'>" + svg + "<b style='margin-left:10px'>" + values[0].value + "</b></div>";
						divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + values[1].name + "<span style = 'float: right'>" + values[1].value + "</span></div>";
						divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + values[3].name + "<span style = 'float: right'>" + values[3].value + "</span></div>";
						divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + values[4].name + "<span style = 'float: right'>" + values[4].value + "</span></div>";
						divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + values[2].name + "<span style = 'float: right'>" + values[2].value + "</span></div>";	
						divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + "Unavailable<span style = 'float: right'>" + chartData[data.target.dataset.id].NewField1 + "</span></div>";
						divStr = divStr + "<div style = 'margin: 5px 30px 15px 30px'>" + "Commited<span style = 'float: right'>" + chartData[data.target.dataset.id].NewField2 + "</span></div>";
						return new HTMLControl({content:divStr});

						return new HTMLControl({
							content: divStr
						});
					}
				});
				oPopOver.connect(oVizFrame1.getVizUid());
				oPopOver.setFormatString(sap.ui.core.format.NumberFormat.getFloatInstance({
					groupingEnabled: true,
					decimalSeparator: ",",
					groupingSeparator: "."
				}).format);

				 var feedActualValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "primaryValues",
					'type': "Measure",
					'values': ["Available"]
				});
				var feedTargetValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "targetValues",
					'type': "Measure",
					'values': ["Safety stock"]
				});
				var feedComparativeValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "forecastValues",
					'type': "Measure",
					'values': ["Not delivered"]
				});
				var feedNewValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "additionalValues",
					'type': "Measure",
					'values': ["Unavailable & Commited"]
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
				oVizFrame1.addFeed(feedNewValues);
				oVizFrame1.addFeed(feedCategoryAxis);

				// var oVizFrame = this.getView().byId("com.ep.zistocks::zz_pv_stock_maraObjectPage--fe::CustomSubSection::StackedChart--idDonutChartPriority1");
				// var aAcompaniamientoData = [{
				// 	"rol": "Row1",
				// 	"target": "4",
				// 	"fiedl1": "7",
				// 	"fiedl2": "3",
				// 	"fiedl3": "7",
				// 	"fiedl4": "6",
				// 	"another field": "1"
				// }, {
				// 	"rol": "Row2",
				// 	"target": "8",
				// 	"fiedl1": "1",
				// 	"fiedl2": "4",
				// 	"fiedl3": "4",
				// 	"fiedl4": "1",
				// 	"another field": "3"
				// }, {
				// 	"rol": "Row3",
				// 	"target": "2",
				// 	"fiedl1": "6",
				// 	"fiedl2": "7",
				// 	"fiedl3": "1",
				// 	"fiedl4": "8",
				// 	"another field": "5"
				// }, {
				// 	"rol": "Row4",
				// 	"target": "5",
				// 	"fiedl1": "4",
				// 	"fiedl2": "9",
				// 	"fiedl3": "8",
				// 	"fiedl4": "0",
				// 	"another field": "1"
				// }];
	
	
				// var oModel = new sap.ui.model.json.JSONModel();
	
	
				// oModel.setData({
				// 	"items": aAcompaniamientoData
				// });
	
				// oVizFrame.setVizProperties({
				// 	plotArea:{
				// 		dataShape:{
				// 			primaryAxis: ["bar","bar","bar","bar","bar"],
				//   			secondaryAxis: ["bullet"]
				// 		},
				// 		dataLabel:{visible: true, formatString:"u"}
				// 	},
				// 	valueAxis:{label:{formatString:"u"}}
				// });
	
				// oVizFrame.setModel(oModel);
				// var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				// 	dimensions: [{
				// 		name: "rol",
				// 		value: "{rol}"
				// 	}],
				// 	measures: [{
				// 		name: "target",
				// 		value: "{target}"
				// 	}, {
				// 		name: "fiedl1",
				// 		value: "{fiedl1}"
				// 	}, {
				// 		name: "fiedl2",
				// 		value: "{fiedl2}"
				// 	}, {
				// 		name: "fiedl3",
				// 		value: "{fiedl3}"
				// 	}, {
				// 		name: "fiedl4",
				// 		value: "{fiedl4}"
				// 	}, {
				// 		name: "another field",
				// 		value: "{another field}"
				// 	}],
	
	
				// 	data: {
				// 		path: "/items"
				// 	}
				// });
				// oVizFrame.setDataset(oDataset);
	
	
				// var oFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
				// 		"uid": "valueAxis2",
				// 		"type": "Measure",
				// 		"values": ["target"]
				// 	}),
				// 	oFeedValueAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
				// 		"uid": "valueAxis",
				// 		"type": "Measure",
				// 		"values": ["fiedl1","fiedl2","fiedl3"]
				// 	}),
				// 	oFeedValueAxis2 = new sap.viz.ui5.controls.common.feeds.FeedItem({
				// 		"uid": "targetValues",
				// 		"type": "Measure",
				// 		"values": ["field4"]
				// 	}),
				// 	// oFeedValueAxis3 = new sap.viz.ui5.controls.common.feeds.FeedItem({
				// 	// 	"uid": "valueAxis",
				// 	// 	"type": "Measure",
				// 	// 	"values": ["fiedl3"]
				// 	// }),
				// 	// oFeedValueAxis4 = new sap.viz.ui5.controls.common.feeds.FeedItem({
				// 	// 	"uid": "valueAxis",
				// 	// 	"type": "Measure",
				// 	// 	"values": ["fiedl4"]
				// 	// }),
				// 	// oFeedValueAxis5 = new sap.viz.ui5.controls.common.feeds.FeedItem({
				// 	// 	"uid": "valueAxis",
				// 	// 	"type": "Measure",
				// 	// 	"values": ["another field"]
				// 	// }),
	
	
				// 	oFeedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
				// 		"uid": "categoryAxis",
				// 		"type": "Dimension",
				// 		"values": ["rol"]
				// 	});
	
	
				// oVizFrame.addFeed(oFeedValueAxis);
				// oVizFrame.addFeed(oFeedValueAxis1);
				// oVizFrame.addFeed(oFeedValueAxis2);
				// // oVizFrame.addFeed(oFeedValueAxis3);
				// // oVizFrame.addFeed(oFeedValueAxis4);
				// // oVizFrame.addFeed(oFeedValueAxis5);
	
	
				// oVizFrame.addFeed(oFeedCategoryAxis);				

			},

			onPageReady: function(oEvent){

				debugger;

				var oTable = this.base.byId("com.ep.zistocks::zz_pv_stock_zite_itecObjectPage--fe::table::_assets::LineItem");
            	if (oTable){
					if (oTable.getFilterConditions().StorageLocation){
						
						oTable.setFilterConditions();
						oTable.rebind();
					}
				}
			}
	
		}
	});
});
