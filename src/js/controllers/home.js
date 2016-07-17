'use strict';

angular.module('starter.controllers').controller('homeController', function($scope, $timeout) {
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
    // note: the indexes are 0-based

    if (data.slider.activeIndex == 0) $scope.description = "Este es mi perro es el mejor perro del mundo por favor adoptalo se llama Jesú."
    if (data.slider.activeIndex == 1) $scope.description = "Este es mi perro Carlos, adoptalo se la banca"
    if (data.slider.activeIndex == 2) $scope.description = "Miralo a Juan quiere un familia"

    $timeout(function() {
      $scope.$apply();
    }, 1);

    $scope.activeIndex = data.activeIndex;
    $scope.previousIndex = data.previousIndex;
  });
});
