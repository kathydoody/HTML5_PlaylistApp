'use strict';

angular.module('knowledgevisionHtml5PlaylistappApp')
	.directive('kvPlayer', function(videoService) {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			// Set the video object on the videoService
			videoService.setVideoElement(element[0]);
			// Watch for selectedVideo to change within the scope
			// on change of selectedVideo, video src will update
			// add event listener to canplay event. Then seek to 
			// video start time and start playing.
			scope.$watch('selectedVideo', function() {
				// wait until video can be played, then set time
				element[0].addEventListener('canplay', function() {
					element[0].currentTime = scope.selectedVideo.startTime;
					element[0].play();
				});
			}, true);
			// Send the playback time to the service  for broadcast
			videoService.on('timeupdate', function() {
				videoService.trackPlayback(element[0].currentTime);
			});
		}
	};
});