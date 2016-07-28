'use strict';

angular.module('starter.controllers').controller('adoptionController', function($scope, $timeout) {
  $scope.options = {
    loop: false,
    effect: 'flip',
    speed: 500,
    spaceBetween: 100
  }

  $scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
    // data.slider is the instance of Swiper
    $scope.description = "This is a basic Card which contains an item that has wrapping text. Este es mi perro es el mejor perro del mundo por favor adoptalo se llama Jesú."

    $scope.slider = data.slider;
  });

  $scope.$on("$ionicSlides.slideChangeStart", function(event, data) {
    console.log('Slide change is beginning');
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data) {

    $timeout(function() {
      $scope.$apply();
    }, 1);

    $scope.activeIndex = data.activeIndex;
    $scope.previousIndex = data.previousIndex;
  });

  /*This data will be removed when the backend work well */
  $scope.publications = [
    {
      authorAvatar: './img/mcfly.jpg',
      authorName: 'Marty McFly',
      postDate: 1469644264,
      principalImage: './img/img1.jpg',
      description: 'Este es mi perro es el mejor perro del mundo por favor adoptalo se llama Jesú.',
      likesCount: 1,
      commentsCount: 5
        },
    {
      authorAvatar: './img/Evange.jpg',
      authorName: 'Evangelina Anderson',
      postDate: 1469644264,
      principalImage: './img/img2.jpeg',
      description: 'Este es mi perro Carlos, adoptalo se la banca',
      likesCount: 35,
      commentsCount: 556
        },
    {
      authorAvatar: './img/pipo.jpg',
      authorName: 'Pipo Cipolatti',
      postDate: 1469644264,
      principalImage: './img/img3.jpeg',
      description: 'Miralo a Juan quiere un familia',
      likesCount: 23,
      commentsCount: 13
        }
    ];

});
