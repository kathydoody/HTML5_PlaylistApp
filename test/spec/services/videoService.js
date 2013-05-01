'use strict';

describe('Service: testVideoService', function() {

  // load the service's module
  beforeEach(module('knowledgevisionHtml5PlaylistappApp'));

  // instantiate service
  var rootScope, testVideoService;

  beforeEach(inject(function($rootScope, $compile, videoService) {
    rootScope = $rootScope;
    testVideoService = videoService;
  }));

  it('should have a service', function() {
    expect(testVideoService).toNotEqual(null);
  });

  it('should return the default playback time', function() {
    expect(testVideoService.getPlaybackTime()).toBe(10);
  });

  it('should update the playback time', function() {
    testVideoService.trackPlayback(20);
    expect(testVideoService.getPlaybackTime()).toBe(20);
  });

  it('should set a video', function() {
    testVideoService.setVideo({});
    expect(testVideoService.getVideo()).toNotEqual(null);
  });

  it('should get a video', function() {
    testVideoService.setVideo({});
    expect(testVideoService.getVideo()).toNotEqual(null);
  });

  it('should broadcast selectedVideo event on setVideo', function() {
    var selectedVideoListener = jasmine.createSpy('listener');
    rootScope.$on('selectedVideo', selectedVideoListener);
    testVideoService.setVideo({});
    expect(selectedVideoListener).toHaveBeenCalled();
  });

  it('should broadcast timeUpdated event on trackPlayback', function() {
    var timeUpdatedVideoListener = jasmine.createSpy('listener');
    rootScope.$on('timeUpdated', timeUpdatedVideoListener);
    testVideoService.trackPlayback(20);
    expect(timeUpdatedVideoListener).toHaveBeenCalled();
  });

});