'use strict';

describe('directives', function() {
	var compile,
	scope,
	videoLink;

	beforeEach(module('knowledgevisionHtml5PlaylistappApp'));
	beforeEach(module('views/templates/videoList.html'));

	beforeEach(inject(function($compile, $rootScope) {

		compile = $compile;
		scope = $rootScope;
		videoLink = angular.element('<video-link></video-link>');
		compile(videoLink)(scope);
		scope.$digest();
	}));

	it('should render the videoLink directive', function() {
		var lis = videoLink.find('li');
		console.log("length: ", lis.length); // should output 1
		expect(lis.length).toBe(1);
	});
});