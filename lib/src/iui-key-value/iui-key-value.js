(function() {
  'use strict';

  angular.module('iui.keyValue', [])
    .directive('iuiKeyValue', list);

  function list() {
    var directive = {
      restrict: 'EA',
      templateUrl: '/$iui-lists/iui-key-value/iui-key-value.html',
      replace: true,
      link: link,
      scope: {
        displayFields: '=',
        fieldData: '=',
        listItemClassName: '@',
        presentationRoleOnly: '@'
      }
    };
    return directive;

    function link(scope) {
      scope.keyValueSettings = {
        valueDefaultTemplate: '/$iui-lists/iui-key-value/value-default-template.html',
        fieldDefaultTemplate: '/$iui-lists/iui-key-value/field-default-template.html'
      };
    }
  }
})();