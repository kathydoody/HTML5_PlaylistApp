'use strict';

describe('knowledgevisionHtml5PlaylistappApp App', function() {
	angular.scenario.dsl('value', function() {
		return function(value) {
			return this.addFuture('value to future', function(done) {
				done(null, value);
			});
		};
	});
	// http://localhost:9000/#/
	beforeEach(function() {
		browser().navigateTo('/__e2e');
	});

	it('should fail', function() {
		expect(value(42)).toBe(42);
	});

});