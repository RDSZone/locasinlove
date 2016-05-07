'use strict';

describe('Controller: TourDatesCtrl', function () {

  // load the controller's module
  beforeEach(module('locasApp'));

  var TourDatesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TourDatesCtrl = $controller('TourDatesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
