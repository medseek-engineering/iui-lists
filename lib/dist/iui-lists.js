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
    .directive('iuiLinkList', linkList);

  function linkList() {
    var directive = {
      scope: {
        listData: '=',
        displayFields: '=',
        linkPrefix: '@',
        linkSuffix: '@',
        linkIndexProperty: '@',
        keyValueClass: '@'
      },
      restrict: 'EA',
      templateUrl: '/$iui-lists/iui-list/iui-link-list.html'
    };
    return directive;
  }
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
(function(module) {
try {
  module = angular.module('iui.listsTemplates');
} catch (e) {
  module = angular.module('iui.listsTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-lists/icons/symbol-defs.html',
    '<svg style="display: none">\n' +
    '  <symbol id="icon-arrow-right" viewBox="0 0 24 24">\n' +
    '    <g sketch:type="MSLayerGroup">\n' +
    '      <path d="M8.59,17.34 L13.17,12.75 L8.59,8.16 L10,6.75 L16,12.75 L10,18.75 L8.59,17.34 Z"></path>\n' +
    '    </g>\n' +
    '  </symbol>\n' +
    '</svg>');
}]);
})();

(function(module) {
try {
  module = angular.module('iui.listsTemplates');
} catch (e) {
  module = angular.module('iui.listsTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-lists/iui-list/iui-link-list.html',
    '<iui-list class="list-group list-group-tight">\n' +
    '  <iui-list-item class="list-group-item" ng-repeat="linkItem in listData track by linkItem[linkIndexProperty]">\n' +
    '    <iui-list-item-link class="list-group-item-link" add-class-to-parent="list-group-item-complex list-group-menu-item" ng-href="{{linkPrefix}}{{linkItem[linkIndexProperty]}}{{linkPostfix}}">\n' +
    '      <svg class="icon icon-arrow-right">\n' +
    '        <use xlink:href="#icon-arrow-right" />\n' +
    '      </svg>\n' +
    '      <iui-key-value\n' +
    '        class="{{keyValueClass}} clearfix"\n' +
    '        presentation-role-only="true"\n' +
    '        display-fields="displayFields"\n' +
    '        field-data="linkItem">\n' +
    '      </iui-key-value>\n' +
    '    </iui-list-item-link>\n' +
    '  </iui-list-item>\n' +
    '</iui-list>\n' +
    '<div ng-include="\'/$iui-lists/icons/symbol-defs.html\'"></div>');
}]);
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
    '    role="{{presentationRoleOnly ? \'presentation\' : \'listitem\'}}">\n' +
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
