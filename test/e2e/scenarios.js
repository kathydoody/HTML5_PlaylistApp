'use strict';

describe('knowledgevisionHtml5PlaylistappApp App', function() {
	// http://localhost:9000/#/
	beforeEach(function() {
		browser().navigateTo('/__e2e');
	});

	it('should fail', function() {
		expect(value(42)).toBe(42);
	});

});