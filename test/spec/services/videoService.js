'use strict';

describe('Service: videoService', function () {

  // load the service's module
  beforeEach(module('knowledgevisionHtml5PlaylistappApp'));

  // instantiate service
  var videoService;
  beforeEach(inject(function (_videoService_) {
    videoService = _videoService_;
  }));

  it('should return the default playback time', function () {
    expect(videoService.getPlaybackTime()).toBe(10);
  });

  it('should update the playback time', function () {
    videoService.trackPlayback(20);
    expect(videoService.getPlaybackTime()).toBe(20);
  });
  // Test event broadcast
});
