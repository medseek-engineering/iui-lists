(function() {
  'use strict';
  angular.module('iui.lists', ['iui.listsTemplates', 'iui.list', 'iui.keyValue', 'iui.brickList']);
})();
(function() {
  'use strict';

  angular.module('iui.brickList', []);

})();
(function() {
  'use strict';

  var iuiBrickListConfig = {
    defaultTemplateUrl: '/$iui-lists/iui-brick-list/default-template.html',
  };

  angular.module('iui.brickList')
    .value('iuiBrickListConfig', iuiBrickListConfig);

})();
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
        keyValueClass: '@',
        listItemClass: '@'
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
    '<svg class="symbol-defs">\n' +
    '  <symbol id="icon-arrow-right" viewBox="0 0 24 24">\n' +
    '    <path d="M8.59,17.34 L13.17,12.75 L8.59,8.16 L10,6.75 L16,12.75 L10,18.75 L8.59,17.34 Z"></path>\n' +
    '  </symbol>\n' +
    '  <symbol id="icon-remove" viewBox="0 0 60 75">\n' +
    '    <path d="M43.67,30.001l15.836-15.836c0.605-0.604,0.661-1.524,0.128-2.058L47.895,0.367c-0.536-0.535-1.453-0.478-2.061,0.128  L29.999,16.329L14.166,0.495c-0.608-0.605-1.525-0.663-2.061-0.128L0.366,12.107c-0.533,0.533-0.477,1.454,0.128,2.058L16.33,30.001  L0.494,45.837c-0.605,0.604-0.661,1.524-0.128,2.058l11.739,11.74c0.536,0.533,1.453,0.475,2.058-0.128l15.836-15.836l15.839,15.836  c0.605,0.603,1.522,0.661,2.058,0.128l11.739-11.74c0.533-0.533,0.477-1.454-0.128-2.058L43.67,30.001z"/>\n' +
    '  </symbol>\n' +
    '</svg>\n' +
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
  $templateCache.put('/$iui-lists/iui-brick-list/category-template.html',
    '<div\n' +
    '  role="presentation"\n' +
    '  ng-class="{\'sr-only\': !brick.categoryName || brick.hideFieldName }"\n' +
    '  class="brick-field {{brick.fieldClassName}}">\n' +
    '  {{ brick.categoryName }}\n' +
    '</div>\n' +
    '<div \n' +
    '  role="presentation"\n' +
    '  ng-if="!brick.displayFields.length"\n' +
    '  class="brick-value brick-value-single {{brick.valueClassName}}">\n' +
    '  {{ brick.displayName }}\n' +
    '</div>\n' +
    '<iui-brick-list \n' +
    '  class="brick-value brick-value-multi {{brick.valueClassName}}"\n' +
    '  ng-if="brick.displayFields.length"\n' +
    '  display-fields="brick.displayFields"\n' +
    '  field-data="fieldData[brick.field]"></iui-brick-list>');
}]);
})();

(function(module) {
try {
  module = angular.module('iui.listsTemplates');
} catch (e) {
  module = angular.module('iui.listsTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-lists/iui-brick-list/date-range-template.html',
    '<div\n' +
    '  role="presentation"\n' +
    '  ng-class="{\'sr-only\': !brick.displayName || brick.hideFieldName }"\n' +
    '  class="brick-field {{brick.fieldClassName}}">\n' +
    '  {{ brick.displayName }}\n' +
    '</div>\n' +
    '<div \n' +
    '  role="presentation"\n' +
    '  class="brick-value brick-value-single {{brick.valueClassName}}">\n' +
    '  {{ fieldData[brick.field][brick.fromField] | date }}  -  {{ fieldData[brick.field][brick.toField] | date }}\n' +
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
  $templateCache.put('/$iui-lists/iui-brick-list/default-template.html',
    '<div\n' +
    '  role="presentation"\n' +
    '  ng-class="{\'sr-only\': !brick.displayName || brick.hideFieldName }"\n' +
    '  class="brick-field {{brick.fieldClassName}}">\n' +
    '  {{ brick.displayName }}\n' +
    '</div>\n' +
    '<div \n' +
    '  role="presentation"\n' +
    '  ng-if="!brick.displayFields.length"\n' +
    '  class="brick-value brick-value-single {{brick.valueClassName}}">\n' +
    '  {{ fieldData[brick.field] }}\n' +
    '</div>\n' +
    '<iui-brick-list \n' +
    '  class="brick-value brick-value-multi {{brick.valueClassName}}"\n' +
    '  ng-if="brick.displayFields.length"\n' +
    '  display-fields="brick.displayFields"\n' +
    '  field-data="fieldData[brick.field]"></iui-brick-list>');
}]);
})();

(function(module) {
try {
  module = angular.module('iui.listsTemplates');
} catch (e) {
  module = angular.module('iui.listsTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-lists/iui-brick-list/iui-brick-list.html',
    '<ul \n' +
    '  class="iui-brick-list clearfix">\n' +
    '  <li  \n' +
    '    ng-repeat="brick in displayFields track by brick.field"\n' +
    '    ng-class="{\'brick-multi\':brick.displayFields.length}"\n' +
    '    ng-if="sizeOfObject(fieldData[brick.field])"\n' +
    '    class="brick {{listItemClassName}} {{brick.field ? \'brick-\'+brick.field : \'\'}}"\n' +
    '    ng-include="brick.templateUrl ? brick.templateUrl : brickListSettings.defaultTemplateUrl">\n' +
    '  </li>\n' +
    '</ul>\n' +
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
  $templateCache.put('/$iui-lists/iui-list/iui-link-list.html',
    '<iui-list class="list-group list-group-tight">\n' +
    '  <iui-list-item\n' +
    '    ng-repeat="linkItem in listData track by linkItem[linkIndexProperty]"\n' +
    '    class="list-group-item"\n' +
    '    ng-class="{{listItemClass}}">\n' +
    '    <iui-list-item-link\n' +
    '      class="list-group-item-link"\n' +
    '      add-class-to-parent="list-group-item-complex list-group-menu-item"\n' +
    '      ng-href="{{linkPrefix}}{{linkItem[linkIndexProperty]}}{{linkPostfix}}">\n' +
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
