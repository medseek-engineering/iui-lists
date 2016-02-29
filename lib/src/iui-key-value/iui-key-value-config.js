(function() {
  'use strict';

  var iuiKeyValueConfig = {
    valueDefaultTemplate: '/$iui-lists/iui-key-value/value-default-template.html',
    fieldDefaultTemplate: '/$iui-lists/iui-key-value/field-default-template.html'
  };

  angular.module('iui.keyValue')
    .value('iuiKeyValueConfig', iuiKeyValueConfig);

})();