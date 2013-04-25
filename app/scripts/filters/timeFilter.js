'use strict';

angular.module('knowledgevisionHtml5PlaylistappApp')
	.filter('timeFilter', function() {
	return function(input) {
		var seconds = Math.round(input);
		var minutes = Math.floor(seconds / 60);
		var hours = Math.floor(minutes / 60);
		seconds %= 60;
		minutes %= 60;
		hours %= 24;
		var sec = seconds.toString();
		var min = minutes.toString();
		var hrs = (hours) ? hours.toString().concat(':') : '';
		if (sec.length < 2) {
			sec = '0' + sec;
		}
		if (min.length < 2) {
			min = '0' + min;
		}
		if (hours && hrs.length < 2) {
			hrs = '0' + hrs;
		}
		return hrs.concat(min, ':', sec);
	};
});