'use strict';

describe('Directive: kvList', function() {
	var element, scope, $rootScope, $compile;

	beforeEach(angular.mock.module('knowledgevisionHtml5PlaylistappApp'));

	beforeEach(inject(
	['$compile', '$rootScope', function($c, $r) {
		$compile = $c;
		$rootScope = $r;
	}]));
	//beforeEach(module('views/templates/videoList.html'));
	var $httpBackend;

	beforeEach(inject(function($injector) {
		$httpBackend = $injector.get('$httpBackend');
		$httpBackend.whenGET('views/templates/videoList.html').passThrough();
	}));

	// beforeEach(inject(function($rootScope, $compile) {
	// 	// we might move this tpl into an html file as well...
	// 	scope = $rootScope;
	// 	scope.videos = [{
	// 		'id': '1',
	// 		'type': 'mp4',
	// 		'title': 'Big Buck Bunny',
	// 		'src': 'assets/big_buck_bunny.mp4',
	// 		'startTime': 14
	// 	}];
	// 	scope.selectedVideo = scope.videos[0];
	// 	scope.videoTime = 0;
	// 	element = angular.element('<video-link ng-repeat="vid in videos" id="{{vid.id}}" type="{{vid.type}}" title="{{vid.title}}" src="{{vid.src}}" time="{{vid.startTime}}" index="{{$index + 1}}"></video-link>');
	// 	$compile(element)(scope);
	// 	scope.$digest();
	// }));

	it("should display the welcome text properly", function() {
		var element = $compile('<video-link ng-repeat="vid in videos" id="{{vid.id}}" type="{{vid.type}}" title="{{vid.title}}" src="{{vid.src}}" time="{{vid.startTime}}" index="{{$index + 1}}"></video-link>')($rootScope);

		//var element = $compile('<div data-app-welcome>User</div>')($rootScope);
		expect(element.html()).to.match(/Welcome/i);
	})
});