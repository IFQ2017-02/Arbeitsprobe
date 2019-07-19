sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("HTS.IT.FIAE.ITQ.controller.HelloPanel", {
       onShowHello : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView().getModel().getProperty("/summe/value1") + this.getView().getModel().getProperty("/summe/value2");
          var sMsg = oBundle.getText("ergebnisMsg", [sRecipient]);
          // show message
          MessageToast.show(sMsg);
       }
    });
 });