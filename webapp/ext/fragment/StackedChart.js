sap.ui.define([
    "sap/m/MessageToast",
    'sap/ui/core/HTML'
], function(MessageToast,HTMLControl) {
    'use strict';

    return {
        onVizFrameRenderComplete: function(oEvent){
            
            debugger;
            let oVizFrame = this.byId("com.ep.zistocks::zz_pv_stock_maraObjectPage--fe::CustomSubSection::StackedChart--idMonthVizFrame");
            if (oVizFrame){
                var chartData = oEvent.getSource().getAggregation("dataset").getBinding("data").getModel().oData;
                const convChartData = Object.fromEntries(
                    Object.values(chartData).map((value, index) => [index, value])
                );
                window.localStorage.setItem("chartData", JSON.stringify(convChartData));
                var oPopOver = new sap.viz.ui5.controls.Popover({
                    'customDataControl' : function(data){
                        debugger;
                        var chartData = JSON.parse(window.localStorage.getItem("chartData"));

                        var values = data.data.val, divStr = "", idx = values[1].value;
                        var svg = "<svg width='10px' height='10px'><path d='M-5,-5L5,-5L5,5L-5,5Z' fill='#5cbae6' transform='translate(5,5)'></path></svg>";
                        divStr = divStr + "<div style = 'margin: 15px 30px 0 10px'>" + svg + "<b style='margin-left:10px'>" + values[0].value + "</b></div>";
                        divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + values[1].name + "<span style = 'float: right'>" + values[1].value + "</span></div>";
                        divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + values[3].name + "<span style = 'float: right'>" + values[3].value + "</span></div>";
                        divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + values[2].name + "<span style = 'float: right'>" + values[2].value + "</span></div>";	
                        divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + "Unavailable<span style = 'float: right'>" + chartData[data.target.dataset.id].unavailableStock + "</span></div>";
                        divStr = divStr + "<div style = 'margin: 5px 30px 15px 30px'>" + "Commited<span style = 'float: right'>" + chartData[data.target.dataset.id].commitedStock + "</span></div>";
                        return new HTMLControl({content:divStr});

                        return new HTMLControl({
                            content: divStr
                        });
                    }
                });
                oPopOver.connect(oVizFrame.getVizUid());
                oPopOver.setFormatString(sap.ui.core.format.NumberFormat.getFloatInstance({
                    groupingEnabled: true,
                    decimalSeparator: ",",
                    groupingSeparator: "."
                }).format);
                }

        }
    };
});
