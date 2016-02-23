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
