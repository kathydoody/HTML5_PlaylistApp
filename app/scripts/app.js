'use strict';

angular
   	.module('knowledgevisionHtml5PlaylistappApp',[])
  	.config(function($routeProvider) {
	  	
	  $routeProvider.when('/', {
	    templateUrl: 'views/urlRouter.html',
	    controller: 'MainCtrl'
	  })
	  .otherwise({
	    redirectTo: '/'
	  });

});