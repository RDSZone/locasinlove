'use strict';

describe('Directive: playerControls', function () {

  // load the directive's module
  beforeEach(module('locasApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<player-controls></player-controls>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the playerControls directive');
  }));
});
