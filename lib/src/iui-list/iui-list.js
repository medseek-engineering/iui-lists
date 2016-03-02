(function() {
  'use strict';

  angular.module('iui.list')
    .directive('iuiList', list);

  function list() {
    var directive = {
      restrict: 'EA',
      template: listTemplate,
      transclude: true
    };
    return directive;
  }

  function listTemplate (element, attr) {
    if (attr.ordered && attr.ordered === 'true') {
      return '<ol class="list-group list-group-tight" ng-transclude></ol>';
    }
    return '<ul class="list-group list-group-tight" ng-transclude></ul>';
  }

})();