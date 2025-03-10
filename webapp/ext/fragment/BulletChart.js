sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onVizFrameRenderComplete: function(oEvent){

            let oVizFrame = this.byId("com.ep.zistocks::zz_pv_stock_zite_materialsObjectPage--fe::CustomSubSection::BulletChart--idMonthVizFrame");
            if (oVizFrame){
                var chartData = oEvent.getSource().getDataset().getBinding("data").getAllCurrentContexts();
                var oPopOver = new sap.viz.ui5.controls.Popover({
                    'customDataControl' : function(data){
                        var values = data.data.val, divStr = "", idx = values[1].value;
                        var svg = "<svg width='10px' height='10px'><path d='M-5,-5L5,-5L5,5L-5,5Z' fill='#5cbae6' transform='translate(5,5)'></path></svg>";
                        divStr = divStr + "<div style = 'margin: 15px 30px 0 10px'>" + svg + "<b style='margin-left:10px'>" + values[0].value + "</b></div>";
                        divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + values[1].name + "<span style = 'float: right'>" + values[1].value + "</span></div>";
                        divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + values[3].name + "<span style = 'float: right'>" + values[3].value + "</span></div>";
                        divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + values[2].name + "<span style = 'float: right'>" + values[2].value + "</span></div>";
                        divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + "Unavailable<span style = 'float: right'>" + chartData[data.target.dataset.id].getProperty("unavailableStock") + "</span></div>";
                        divStr = divStr + "<div style = 'margin: 5px 30px 15px 30px'>" + "Commited<span style = 'float: right'>" + chartData[data.target.dataset.id].getProperty("commitedStock") + "</span></div>";
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
