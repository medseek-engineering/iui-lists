(function() {
  'use strict';

  angular.module('iui.list')
    .directive('iuiListItem', listItem);

  function listItem() {
    var directive = {
      restrict: 'EA',
      template: '<li ng-transclude></li>',
      transclude: true,
      replace: true
    };
    return directive;
  }

})();