'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('knowledgevisionHtml5PlaylistappApp'));

  var MainCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', 'config.json').respond({
      "template": "views/center.html"
    });
    scope = $rootScope.$new();
    scope.videos = [{
      'id': '1',
      'type': 'mp4',
      'title': 'Big Buck Bunny',
      'src': 'assets/big_buck_bunny.mp4',
      'startTime': 14
    }, {
      'id': '2',
      'type': 'mp4',
      'title': 'Goofy Pirates',
      'src': 'assets/pirateSong.mp4',
      'startTime': 53
    }];
    scope.selectedVideo = scope.videos[0];
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should attach a list of videos to the scope', function() {
    expect(scope.videos.length).toBe(3);
    $httpBackend.flush();
  });

  it('should select the first video', function() {
    expect(scope.selectedVideo.title).toBe('Big Buck Bunny');
    $httpBackend.flush();
  });

  it('should default playbackTime to 0', function() {
    expect(scope.playbackTime).toBe(0);
    $httpBackend.flush();
  });
});