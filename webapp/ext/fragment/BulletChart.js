sap.ui.define(["sap/m/MessageToast", "sap/ui/core/HTML"], function (MessageToast, HTML) {
    "use strict";

    return {
        onVizFrameRenderComplete: function (oEvent) {
            let oVizFrame = this.byId("com.ep.zistocks::zz_pv_stock_zite_materialsObjectPage--fe::CustomSubSection::BulletChart--idMonthVizFrame");
            
            if (oVizFrame) {
                var aContexts = oEvent.getSource().getDataset().getBinding("data").getAllCurrentContexts();
                var oPopover = new sap.viz.ui5.controls.Popover({
                    customDataControl: function (oData) {
                        var aDataValues = oData.data.val;
                        var sContent = "";
                        var iTargetId = oData.target.dataset.id;
                        var oContext = aContexts[iTargetId];
                        
                        if (aDataValues) {
                            var sSvgIcon = "<svg width='10px' height='10px'><path d='M-5,-5L5,-5L5,5L-5,5Z' fill='#5cbae6' transform='translate(5,5)'></path></svg>";
                            sContent += `<div style='margin: 15px 30px 0 10px'>${sSvgIcon}<b style='margin-left:10px'>${aDataValues[0].value}</b></div>`;
                            sContent += `<div style='margin: 5px 30px 0 30px'>${aDataValues[1].name}<span style='float: right'>${aDataValues[1].value}</span></div>`;
                            sContent += `<div style='margin: 5px 30px 0 30px'>${aDataValues[3].name}<span style='float: right'>${aDataValues[3].value}</span></div>`;
                            sContent += `<div style='margin: 5px 30px 0 30px'>${aDataValues[2].name}<span style='float: right'>${aDataValues[2].value}</span></div>`;
                            sContent += `<div style='margin: 5px 30px 0 30px'>Unavailable<span style='float: right'>${oContext.getProperty("unavailableStock")}</span></div>`;
                            sContent += `<div style='margin: 5px 30px 15px 30px'>Commited<span style='float: right'>${oContext.getProperty("commitedStock")}</span></div>`;
                        }
                        
                        return new HTML({ content: sContent });
                    }
                });
                
                oPopover.connect(oVizFrame.getVizUid());
                oPopover.setFormatString(sap.ui.core.format.NumberFormat.getFloatInstance({
                    groupingEnabled: true,
                    decimalSeparator: ",",
                    groupingSeparator: "."
                }).format);
            }
        },

        getSafetyStock: function (eventsSafetyStock, safetyStock) {
            return eventsSafetyStock ? eventsSafetyStock : safetyStock;
        }
    };
});
