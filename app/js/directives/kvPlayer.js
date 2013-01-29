'use strict';

myApp.directive(

    'kvPlayer', function($parse, videoService, $timeout){

        return {
            restrict: 'A',

            link: function(scope, element, attrs){

                videoService.setVideoElement(element[0]);

                scope.$watch('selectedVideo',function(value){

                    // wait until video can be played, then set time
                    element[0].addEventListener('canplay', function(){
                        element[0].currentTime = scope.selectedVideo.startTime;
                        element[0].play();
                    }) ;
                },true);

               // tell service it's paused
                videoService.on('pause', function(){
                    console.log('I am paused');
                })

                // send the playback time to the service  for broadcast
                videoService.on('timeupdate', function(){
                    videoService.trackPlayback(element[0].currentTime);
                })


            }

        };

    });