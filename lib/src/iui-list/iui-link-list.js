(function() {
  'use strict';

  angular.module('iui.list')
    .directive('iuiLinkList', linkList);

  function linkList() {
    var directive = {
      scope: {
        listData: '=',
        displayFields: '=',
        linkPrefix: '@',
        linkSuffix: '@',
        linkIndexProperty: '@',
        keyValueClass: '@',
        listItemClass: '@'
      },
      restrict: 'EA',
      templateUrl: '/$iui-lists/iui-list/iui-link-list.html'
    };
    return directive;
  }
})();