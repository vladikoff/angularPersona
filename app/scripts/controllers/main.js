'use strict';

angular.module('angularPersonaApp')
  .controller('MainCtrl', function ($scope, personaService) {

    $scope.login = function () {
     navigator.id.request();
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
