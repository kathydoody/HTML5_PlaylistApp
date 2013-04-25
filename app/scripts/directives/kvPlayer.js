'use strict';

angular.module('knowledgevisionHtml5PlaylistappApp')
	.directive('kvPlayer', function(videoService) {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			videoService.setVideoElement(element[0]);
			scope.$watch('selectedVideo', function() {
				console.log("VIDEO", scope.selectedVideo.src);
				// wait until video can be played, then set time
				element[0].addEventListener('canplay', function() {
					element[0].currentTime = scope.selectedVideo.startTime;
					element[0].play();
				});
			}, true);
			// send the playback time to the service  for broadcast
			videoService.on('timeupdate', function() {
				videoService.trackPlayback(element[0].currentTime);
			});
		}
	};
});