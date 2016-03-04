(function() {
  'use strict';

  angular.module('iui.list')
    .directive('iuiList', list);

  function list() {
    var directive = {
      restrict: 'EA',
      template: listTemplate,
      transclude: true,
      replace: true
    };
    return directive;
  }

  function listTemplate (element, attr) {
    if (attr.ordered && attr.ordered === 'true') {
      return '<ol ng-transclude></ol>';
    }
    return '<ul ng-transclude></ul>';
  }

})();