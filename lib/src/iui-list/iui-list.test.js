(function () {
  'use strict';

  describe('iui-list directive', function () {
    var scope,
      element,
      el,
      listElement,
      $compile,
      listItemElements;
    beforeEach(function () {
      module('iui.list');
      module('templates');
    });
    
    describe('when ordered is false', function() {
      beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        element = angular.element('<div><iui-list ordered="false"><iui-list-item>First item</iui-list-item><iui-list-item>Second item</iui-list-item></iui-list></div>');
        el = $compile(element)(scope);
        scope.$digest();
        listElement = el[0].querySelectorAll('ul');
        listItemElements = el[0].querySelectorAll('li');
      }));
      it('Has 2 <li>', function () {
        expect(listItemElements.length).toBe(2);
      });
      it('second <li> displays `First item`', function () {
        expect(listItemElements[0].innerHTML.replace(/<[^>]*>/g, '')).toBe('First item');
      });
      it('second <li> displays `Second item`', function () {
        expect(listItemElements[1].innerHTML.replace(/<[^>]*>/g, '')).toBe('Second item');
      });
      it('Has 1 <ul>', function () {
        
        expect(listElement.length).toBe(1);
      });
    });
    describe('when ordered is true', function() {
      beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        element = angular.element('<div><iui-list ordered="true"><iui-list-item>First item</iui-list-item><iui-list-item>Second item</iui-list-item></iui-list></div>');
        el = $compile(element)(scope);
        scope.$digest();
        listElement = el[0].querySelectorAll('ol');
        listItemElements = el[0].querySelectorAll('li');
      }));
      it('Has 1 <ol>', function () {
        expect(listElement.length).toBe(1);
      });
    });
  });
}(window.app));