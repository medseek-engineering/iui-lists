(function () {
  'use strict';

  describe('iui-key-value directive', function () {
    var scope,
      element,
      el,
      listElement,
      listItemElements;
    beforeEach(function () {
      module('iui.keyValue');
      module('templates');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.testFields = [
        {
          displayName: 'Name',
          field: 'name',
          hideFieldName: true
        },
        {
          displayName: 'Due',
          field: 'due',
        },
        {
          displayName: 'Status',
          field: 'status'
        },
        {
          displayName: 'Assigned',
          field: 'assigned'
        }
      ];

      scope.testDetail = {
        name: 'Task 2',
        id: 2,
        status: 'Completed',
        type: 'Basic',
        due: '2016-01-26T06:00:00',
        assigned: 'Joe'
      };
      element = angular.element('<div><iui-key-value display-fields="testFields" field-data="testDetail"></iui-key-value></div>');
      el = $compile(element)(scope);
      scope.$digest();
      listElement = el[0].querySelectorAll('*[role=list]');
      listItemElements = el[0].querySelectorAll('*[role=listitem]');
    }));
    it('Has 1 role=list', function () {
      expect(listElement.length).toBe(1);
    });
    it('Has 4 role=listitem', function () {
      expect(listItemElements.length).toBe(4);
    });
    it('second role=listitem displays key of `Due`', function () {
      var secondItemKey = listItemElements[1].querySelector('.key-value-field');
      expect(secondItemKey.innerHTML.replace(/<[^>]*>/g, '')).toBe('Due');
    });
    it('third role=listitem displays value of `Completed`', function () {
      var thirdItemValue = listItemElements[2].querySelector('.key-value-value');
      expect(thirdItemValue.innerHTML.replace(/<[^>]*>/g, '')).toBe('Completed');
    });
    it('first role=listitem key has .sr-only class applied', function () {
      var firstItemKey = listItemElements[0].querySelectorAll('.key-value-field.sr-only');
      expect(firstItemKey.length).toBe(1);
    });
    
  });
}(window.app));