'use strict';

angular.module('knowledgevisionHtml5PlaylistappApp')
	.directive('videoLink', function(videoService) {
	return {
		restrict: 'E',
		scope: {
			id: '@id',
			type: '@type',
			title: '@title',
			src: '@src',
			time: '@time',
			index: '@index'
		},
		templateUrl: 'views/templates/videoList.html',
		link: function postLink(scope, element, attrs) {
			// react to click
			element.bind('click', function() {
				var video = {
					'id': scope.id,
					'type': scope.type,
					'title': scope.title,
					'src': scope.src,
					'startTime': scope.time
				};
				scope.videoTime = scope.time;
				// tell the shared service it changed
				videoService.setVideo(video);
			});
		}
	};
});