sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
 ], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("HTS.IT.FIAE.ITQ.Component", {
       metadata : {
             manifest: "json"
       },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          // set data model
          var oData = {
             summe : {
                value1 : "1",
                value2 : "2"
             }
          };
          var oModel = new JSONModel(oData);
          this.setModel(oModel);
       }
    });
 });