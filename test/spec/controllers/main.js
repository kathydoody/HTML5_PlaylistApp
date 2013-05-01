'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('knowledgevisionHtml5PlaylistappApp'));

  var MainCtrl,
  scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of videos to the scope', function() {
    expect(scope.videos.length).toBe(3);
  });

  it('should select the first video', function() {
    expect(scope.selectedVideo.title).toBe('Big Buck Bunny');
  });

  it('should default playbackTime to 0', function() {
    expect(scope.playbackTime).toBe(0);
  });
});