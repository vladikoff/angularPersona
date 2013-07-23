'use strict';

describe('Service: personaService', function () {

  // load the service's module
  beforeEach(module('angularPersonaApp'));

  // instantiate service
  var personaService;
  beforeEach(inject(function (_personaService_) {
    personaService = _personaService_;
  }));

  it('should do something', function () {
    expect(!!personaService).toBe(true);
  });

});
