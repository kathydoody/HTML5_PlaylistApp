'use strict';

angular.module('knowledgevisionHtml5PlaylistappApp', [])
  .config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
    .otherwise({
    redirectTo: '/'
  });
});