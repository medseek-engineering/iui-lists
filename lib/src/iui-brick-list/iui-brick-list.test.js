(function () {
  'use strict';

  describe('iui-brick-list directive', function () {
    var scope,
      element,
      el,
      listElement,
      listItemElements;
    beforeEach(function () {
      module('iui.brickList');
      module('templates');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      
      scope.testFields = [
        {
          displayName: 'Keyword',
          field: 'keyword',
          hideFieldName: true
        },
        {
          displayName: '',
          field: 'category'
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
      
      scope.testDetails = {
        keyword: 'October',
        status: 'Complete',
        assigned: 'Dr. Octopus',
        id: 1,
        category: 'Animals'
      };
      
      element = angular.element('<div><iui-brick-list display-fields="testFields" field-data="testDetails"></iui-brick-list></div>');
      el = $compile(element)(scope);
      scope.$digest();
      listItemElements = el[0].querySelectorAll('.brick');
      console.log(listItemElements[1]);
    }));
    
    it('Has 4 bricks', function () {
      expect(listItemElements.length).toBe(4);
    });
    it('first brick does not display a key', function () {
      var firstItemKey = listItemElements[0].querySelectorAll('.brick .sr-only');
      expect(firstItemKey.length).toBe(1);
    });
    it('second brick does not display a key', function () {
      var secondItemKey = listItemElements[1].querySelectorAll('.brick .sr-only');
      expect(secondItemKey.length).toBe(1);
    });
    it('third brick displays a key', function () {
      var thirdItemKey = listItemElements[2].querySelectorAll('.brick .sr-only');
      expect(thirdItemKey.length).toBe(0);
    });
    it('fourth brick displays a key', function () {
      var fourthItemKey = listItemElements[3].querySelectorAll('.brick .sr-only');
      expect(fourthItemKey.length).toBe(0);
    });
    it('fourth brick displays a value of Dr. Octopus', function () {
      var fourthItemValue = listItemElements[3].querySelector('.brick-value');
      var fourthItemValueStripped = fourthItemValue.innerHTML.replace(/<[^>]*>/g, '');
      console.log(fourthItemValueStripped);
      expect(fourthItemValue.innerHTML.replace(/<[^>]*>/g, '').trim()).toBe('Dr. Octopus');
    });
    
    
  });
}(window.app));