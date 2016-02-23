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
    return (attr.ordered) ? '<ol class="list-group list-group-tight" ng-transclude></ol>' 
                          : '<ul class="list-group list-group-tight" ng-transclude></ul>';
  }

})();