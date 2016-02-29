(function() {
  'use strict';

  angular.module('iui.keyValue')
    .directive('iuiKeyValue', keyValueList);

  function keyValueList() {
    var directive = {
      restrict: 'EA',
      templateUrl: '/$iui-lists/iui-key-value/iui-key-value.html',
      replace: true,
      controller: KeyValueController,
      scope: {
        displayFields: '=',
        fieldData: '=',
        listItemClassName: '@',
        presentationRoleOnly: '@'
      }
    };
    return directive;
  }

  KeyValueController.$inject = ['$scope', 'iuiKeyValueConfig'];

  function KeyValueController($scope, iuiKeyValueConfig) {
    $scope.keyValueSettings = iuiKeyValueConfig;
  }


})();