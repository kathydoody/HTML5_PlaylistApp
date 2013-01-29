/*'use strict';

angular.module('myApp.directives', [])

.directive(

    'kvPlayer', function($parse, videoService){

        return {
            restrict: 'E',

            link: function(scope, element, attrs){

                *//* scope.$on('handleVideoClick', function(){
                 console.log("directive sensed video click") ;
                 })*//*
                alert("kvPlayer alive");

                scope.$watch('selectedVideo',function(){
                    // is this the only way to bind this?
                    console.log('This selected video is changed and directive knows!!!');
                },false);



            }

        };

    },



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

            // add the list of videos  to the DOM
            attrs.$observe('title', function(value){
                if(value)  {
                    element.html('<div>'+ value + '</div>');
                }
            }) ;

            alert("videoLink alive");

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

}



);*/




