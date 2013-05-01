'use strict';

describe('Filter: timeFilter', function() {

  // load the filter's module
  beforeEach(module('knowledgevisionHtml5PlaylistappApp'));

  // initialize a new instance of the filter before each test
  var timeFilter;
  beforeEach(inject(function($filter) {
    timeFilter = $filter('timeFilter');
  }));

  it('should return a number in a time format', function() {
    expect(timeFilter(0)).toBe('00:00');
  });

});