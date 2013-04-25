'use strict';

angular.module('knowledgevisionHtml5PlaylistappApp')
  .factory('videoService', function($rootScope) {
  var video = null;
  var startTime = null;
  var videoElement = null;
  var playbackTime = 10;
  var api = {
    setVideo: function(videoObj) {
      video = videoObj;
      startTime = video.startTime;
      $rootScope.$broadcast('handleVideoClick');
    },
    trackPlayback: function(time) {
      playbackTime = time;
      $rootScope.$broadcast('timeUpdated');
    },
    getPlaybackTime: function() {
      return angular.copy(playbackTime);
    },
    getVideo: function() {
      return angular.copy(video);
    },
    getVideoStartTime: function() {
      return angular.copy(startTime);
    },
    setVideoElement: function(videoElm) {
      videoElement = videoElm;
      videoElement.addEventListener('playing', function() {
      });
    },
    on: function(eventName, callBack) {
      videoElement.addEventListener(eventName, function() {
        var args = arguments;
        $rootScope.$apply(function() {
          callBack.apply(videoElement, args);
        });
      });
    }
  };
  return api;
});