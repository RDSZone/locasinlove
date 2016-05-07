'use strict';

describe('Directive: navOverlay', function () {

  // load the directive's module
  beforeEach(module('locasApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nav-overlay></nav-overlay>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the navOverlay directive');
  }));
});
