sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("HTS.IT.FIAE.ITQ.controller.HelloPanel", {
       onRechne : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sValue1 = this.getView().getModel().getProperty("/summe/value1");
          var sValue2 = this.getView().getModel().getProperty("/summe/value2");
          var sSumme = parsfloat(sValue1) + parsfloat(sValue2);
          var sMsg = oBundle.getText("ergebnisMsg", [sSumme]);
          // show message
          MessageToast.show(sMsg);
       }
    });
 });