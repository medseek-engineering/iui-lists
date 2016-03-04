(function() {
  'use strict';

  angular.module('iui.list')
    .directive('iuiListItemLink', listItemLink);

  function listItemLink() {
    var directive = {
      restrict: 'EA',
      template: getTemplate,
      transclude: true,
      replace: true,
      link: postLink
    };

    return directive;

    function isAnchor(attrs) {
      return angular.isDefined(attrs.href) || angular.isDefined(attrs.ngHref) || angular.isDefined(attrs.ngLink) || angular.isDefined(attrs.uiSref);
    }

    function getTemplate(element, attrs) {
      return isAnchor(attrs) ? '<a href="" ng-transclude></a>'
                             : '<button ng-transclude></button>';
    }

    function postLink(scope, element, attrs) {
      if (element.parent()) {
        element.parent().addClass(attrs.addClassToParent);
      }
    }

  }

})();