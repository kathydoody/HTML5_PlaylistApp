'use strict';

describe('knowledgevisionHtml5PlaylistappApp App', function() {

	beforeEach(function() {
		browser().navigateTo('/');
	});

	describe('Main view', function() {
		it('should display the correct route', function() {
			expect(browser().location().path()).toBe('/');
		});

		it('should display the correct count of videos in the list', function() {
			expect(repeater('ul.video-list li').count()).toBe(3);
		});

		it('should display the currently playing video title', function() {
			element('ul.video-list li:eq(1)').click();
			using('.video-container h6').expect(binding('selectedVideo.title')).toBe('Goofy Pirates');
		});

		it('should display the correct video time formatted', function() {
			element('ul.video-list li:eq(1)').click();
			using('.video-container span').expect(binding('playbackTime')).toBe('00:00');
		});

		it('should set the correct video source', function() {
			element('ul.video-list li:eq(1)').click();
			using('.video-container video').expect(binding('selectedVideo.src')).toBe('assets/pirateSong.mp4');
		});
	});
});

