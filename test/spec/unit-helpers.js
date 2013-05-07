// Jasmine Helpers - Additional helper methods for Unit Testing using Jasmine
// Author: Simon Bailey

// Top level namespace for the package
jasmine.helpers = (typeof jasmine.helpers === 'undefined') ? {} : jasmine.helpers;
// Event.[name] -> grammer
jasmine.helpers.Event = {
	// Create a new DOM event using the name arg
	create: function(win, name) {
		var evt = win.createEvent('Event');
		evt.initEvent(name, true, true);
		return evt;
	}
};
// Case aliases to Event for Coffeescript use
(function(Event) {
  Event.Create = Event.create;
}) (jasmine.helpers.Event);