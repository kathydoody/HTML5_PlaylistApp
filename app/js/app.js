'use strict';

var myApp = angular.module('myApp', ['myApp.services']);

myApp.config(['$routeProvider', function($routeProvider) {
      console.log('hey i am in config') ;
    var template =  'partials/partial1.html';

    $routeProvider.when('/view1', {templateUrl:template, controller:AppCtrl}).
        otherwise({redirectTo: '/view1'});
    }]
 );






