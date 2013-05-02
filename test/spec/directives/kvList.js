'use strict';

describe('Directive: kvList', function() {
	var elm, scope;

	beforeEach(angular.mock.module('knowledgevisionHtml5PlaylistappApp'));

	beforeEach(module('views/templates/videoList.html'));

	beforeEach(inject(function($rootScope, $compile) {
		// we might move this tpl into an html file as well...
		elm = angular.element('<div class="well span4"><h3>Playlist:</h3><video-link ng-repeat="vid in videos" id="{{vid.id}}" type="{{vid.type}}" title="{{vid.title}}" src="{{vid.src}}" time="{{vid.startTime}}" index="{{$index + 1}}"></video-link></div>');

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

	it("should display the number of items in the videos list", function() {
		var list = elm.find('li');
		expect(list.length).toBe(2);
	});

	it("should display the index number from the item in videos list", function() {
		var p = elm.find('span');
		expect(p.eq(0).text()).toBe('1');
		expect(p.eq(1).text()).toBe('2');
	});

	it("should display the name from the videos list", function() {
		var p = elm.find('p');
		expect(p.eq(0).text()).toBe('Big Buck Bunny');
		expect(p.eq(1).text()).toBe('Goofy Pirates');
	});

});