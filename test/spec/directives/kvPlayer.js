'use strict';

describe('Directive: kvPlayer', function() {
	var elm, scope;

	beforeEach(angular.mock.module('knowledgevisionHtml5PlaylistappApp'));

	beforeEach(inject(function($rootScope, $compile) {
		// we might move this tpl into an html file as well...
		elm = angular.element('<div class="well span8 video-container"><video id="Video1" class="video" ng-src="{{selectedVideo.src}}" type="video/mp4" controls kv-player></video></div>');

		scope = $rootScope;

		scope.videos = [{
			'id': '1',
			'type': 'mp4',
			'title': 'Big Buck Bunny',
			'src': 'assets/big_buck_bunny.mp4',
			'startTime': 14
		}, {
			'id': '2',
			'type': 'mp4',
			'title': 'Goofy Pirates',
			'src': 'assets/pirateSong.mp4',
			'startTime': 53
		}];


		$compile(elm)(scope);
		scope.$digest();
	}));

	it("should assign the correct video source", function() {
		//var v = elm.find('video');
		//expect(v.eq(0).src).toBe('assets/big_buck_bunny.mp4');
	});
});