'use strict';

angular.module('knowledgevisionHtml5PlaylistappApp')
	.directive('kvPlayer', function(videoService) {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			var videoElement = element[0];
			// Register listener for canplay event
			videoElement.addEventListener('canplay', function() {
				videoElement.currentTime = scope.selectedVideo.startTime;
				// More for testing purposes than anything
				if(typeof videoElement !== 'undefined' && videoElement.play) {
					videoElement.play();
				}
			});
			// Set the video object on the videoService
			videoService.setVideoElement(videoElement);
			// Send the playback time to the service  for broadcast
			videoService.on('timeupdate', function() {
				videoService.trackPlayback(videoElement.currentTime);
			});
		}
	};
});