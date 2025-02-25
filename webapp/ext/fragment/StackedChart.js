sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        },

        onBeforeRendering: function(){
            debugger;
        },

        onInit: function(){

            debugger;

            var oModel = new sap.ui.model.json.JSONModel({
                businessData : [
                    {Country :"Canada",profit:10},
                    {Country :"China",profit:12},
                    {Country :"France",profit:30},
                    {Country :"Germany",profit:25},
                    {Country :"India",profit:8},
                    {Country :"United States",profit:19}
                ]
            });		
        
            // A Dataset defines how the model data is mapped to the chart 
            var oDataset = new sap.viz.ui5.data.FlattenedDataset({
        
                // a Bar Chart requires exactly one dimension (x-axis) 
                dimensions : [ 
                    {
                        axis : 1, // must be one for the x-axis, 2 for y-axis
                        name : 'Country', 
                        value : "{Country}"
                    } 
                ],
        
                // it can show multiple measures, each results in a new set of bars in a new color 
                measures : [ 
                    // measure 1
                    {
                        name : 'Profit', // 'name' is used as label in the Legend 
                        value : '{profit}' // 'value' defines the binding for the displayed value   
                    }
                ],
                
                // 'data' is used to bind the whole data collection that is to be displayed in the chart 
                data : {
                    path : "/businessData"
                }
                
            });
        
            // create a Bar chart
            // you also might use Combination, Line, StackedColumn100, StackedColumn or Column
            // for Donut and Pie please remove one of the two measures in the above Dataset.  
            var oCChart = new sap.viz.ui5.Column({
                width : "600px",
                height : "400px",
                title : {
                    visible : true,
                    text : 'Profit and Revenue By Country'
                },
                dataset : oDataset,
                });
        
            // attach the model to the chart and display it
            oCChart.setModel(oModel);
            oCChart.placeAt("uiArea");

        }
    };
});
