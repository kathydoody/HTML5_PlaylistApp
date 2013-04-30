angular.scenario.dsl('value', function() {
	return function(value) {
		return this.addFuture('value to future', function(done) {
			done(null, value);
		});
	};
});
angular.scenario.dsl('src', function() {
	return function(selector) {
		return this.addFutureAction('src', function(window, $document, done) {
			var src = $document.find("Video1"); // <video>.src
			done(null, src);
		});
	};
});
// Return `document` for running application.
angular.scenario.dsl('doc', function() {
	return function() {
		return this.application.getWindow_().document;
	};
});

// Return `jQuery(document.body)` for running application;
// requires you to have included your own copy of jQuery.
var body = function() {
	return $(doc().body);
};