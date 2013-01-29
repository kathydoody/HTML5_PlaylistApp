'use strict';

myApp.directive(

    'videoLink', function($parse, videoService){

        return {
            restrict: 'E',

            scope: {
                id: '@id',
                type: '@type',
                title:'@title',
                src: '@src',
                time: '@time'
            },

            link: function(scope, element, attrs){
              // console.log(element) ;
              //  console.log(attrs) ;

             //  element.html('<div>'+ attrs.title + '</div>');

                // add the list of videos  to the DOM
                attrs.$observe('title', function(value){
                    if(value)  {
                       element.html('<div>'+ value + '</div>');
                    }
                }) ;

                // react to click
                element.bind('click', function(val){

                    var video  =  {"id": scope.id,
                        "type":scope.type,
                        "title":scope.title,
                        "src":scope.src,
                        "startTime":scope.time} ;

                    scope.videoTime = scope.time;

                    // tell the shared service it changed
                    videoService.setVideo(video);
                });

                element.bind('$destroy', function(){

                    // clean up
                })

            }

        };

    });