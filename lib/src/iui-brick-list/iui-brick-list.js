(function() {
  'use strict';

  angular.module('iui.brickList')
    .directive('iuiBrickList', brickList);

  function brickList() {
    var directive = {
      restrict: 'EA',
      templateUrl: '/$iui-lists/iui-brick-list/iui-brick-list.html',
      replace: true,
      controller: BrickListController,
      scope: {
        displayFields: '=',
        fieldData: '=',
        listItemClassName: '@',
        presentationRoleOnly: '@'
      }
    };
    return directive;
  }

  BrickListController.$inject = ['$scope', 'iuiBrickListConfig'];

  function BrickListController($scope, iuiBrickListConfig) {
    $scope.brickListSettings = iuiBrickListConfig;

    // has size and has one truthy value
    $scope.sizeOfObject = function(theObject) {

      if (_.isBoolean(theObject)) {
        return theObject;
      }

      if (angular.isObject(theObject) ) {
        var truthyValues = _.pick(theObject, _.identity);
        return _.size(truthyValues);
      }

      return _.size(theObject);
    };

  }


})();