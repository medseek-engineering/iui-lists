(function (app) {
  'use strict';
  app.ng.requires.push('iui.lists');
}(window.app));
(function() {
  'use strict';
  angular.module('iui.lists', ['iui.listsTemplates', 'iui.list', 'iui.keyValue']);
})();
(function() {
  'use strict';

  angular.module('iui.keyValue', []);

})();
(function() {
  'use strict';

  var iuiKeyValueConfig = {
    valueDefaultTemplate: '/$iui-lists/iui-key-value/value-default-template.html',
    fieldDefaultTemplate: '/$iui-lists/iui-key-value/field-default-template.html'
  };

  angular.module('iui.keyValue')
    .value('iuiKeyValueConfig', iuiKeyValueConfig);

})();
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
(function() {
  'use strict';
  angular.module('iui.list', []);
})();
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
      return isAnchor(attrs) ? '<a class="list-group-item-link" href="" ng-transclude></a>'
                             : '<button class="list-group-item-link" ng-transclude></button>';
    }

    function postLink(scope, element, attrs) {
      if (element.parent()) {
        element.parent().addClass('list-group-item-complex list-group-menu-item');
      }
    }

  }

})();
(function() {
  'use strict';

  angular.module('iui.list')
    .directive('iuiListItem', listItem);

  function listItem() {
    var directive = {
      restrict: 'EA',
      template: '<li class="list-group-item" ng-transclude></li>',
      transclude: true,
      replace: true
    };
    return directive;
  }

})();
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
(function(module) {
try {
  module = angular.module('iui.listsTemplates');
} catch (e) {
  module = angular.module('iui.listsTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-lists/iui-key-value/field-default-template.html',
    '{{ displayField.displayName }}');
}]);
})();

(function(module) {
try {
  module = angular.module('iui.listsTemplates');
} catch (e) {
  module = angular.module('iui.listsTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-lists/iui-key-value/iui-key-value.html',
    '<div \n' +
    '  class="iui-key-value"\n' +
    '  role="{{presentationRoleOnly ? \'presentation\' : \'list\'}}">\n' +
    '  <dl  \n' +
    '    ng-repeat="displayField in displayFields track by displayField.field"\n' +
    '    ng-class="displayField.field ? \'key-value-\'+displayField.field : \'\'"\n' +
    '    class="key-value {{displayField.className}} {{listItemClassName}}"\n' +
    '    role="{{presentationRoleOnly ? \'presentation\' : \'list-item\'}}">\n' +
    '    <dt\n' +
    '      role="presentation"\n' +
    '      ng-class="{\'sr-only\': displayField.hideFieldName }"\n' +
    '      class="key-value-field {{displayField.fieldClassName}}"\n' +
    '      ng-include="displayField.fieldTemplateUrl ? displayField.fieldTemplateUrl : keyValueSettings.fieldDefaultTemplate">\n' +
    '    </dt>\n' +
    '    <dd \n' +
    '      role="presentation"\n' +
    '      class="key-value-value {{displayField.valueClassName}}"\n' +
    '      ng-include="displayField.valueTemplateUrl ? displayField.valueTemplateUrl : keyValueSettings.valueDefaultTemplate">\n' +
    '    </dd>\n' +
    '  </dl>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('iui.listsTemplates');
} catch (e) {
  module = angular.module('iui.listsTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-lists/iui-key-value/value-default-template.html',
    '{{ fieldData[displayField.field] }}');
}]);
})();
