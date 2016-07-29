'use strict';

angular.module('starter.controllers').controller('sectionsController', function($scope, $timeout) {
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

  $scope.section = 'Adopt';

  $scope.changeSection = function(section) {
    switch(section){
      case 'Adopt' :
        $scope.publications = $scope.adoptPubs;
        $scope.section = 'Adopt';
        console.log('Adopt section');
        break;
      case 'Wanted' :
        $scope.publications = $scope.wantedPubs;
        $scope.section = 'Wanted';
        console.log('Wanted section');
        break;
      case 'Lost' :
        $scope.publications = $scope.lostPubs;
        $scope.section = 'Lost';
        console.log('Lost section');
        break;
    }
  }

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

    $scope.adoptPubs = [
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

    $scope.wantedPubs = [
      {
        authorAvatar: './img/mcfly.jpg',
        authorName: 'Otro McFly',
        postDate: 1429644264,
        principalImage: './img/img1.jpg',
        description: 'Se me ha perdido Jesú. Por favor, encontralo.',
        likesCount: 25000,
        commentsCount: 10000
        },
      {
        authorAvatar: './img/Evange.jpg',
        authorName: 'La Yehhniìí',
        postDate: 1469641264,
        principalImage: './img/img2.jpeg',
        description: 'Loco, no lo encuentro a Carlos.',
        likesCount: 5000000,
        commentsCount: 12000
          },
      {
        authorAvatar: './img/pipo.jpg',
        authorName: 'Jose Jorge',
        postDate: 1469644234,
        principalImage: './img/img3.jpeg',
        description: 'Juan se escapó de mi cantri, alguien que lo haya visto?',
        likesCount: 2,
        commentsCount: 1
          }
      ];

    $scope.lostPubs = [
      {
        authorAvatar: './img/mcfly.jpg',
        authorName: 'Marty McFly',
        postDate: 1465644264,
        principalImage: './img/img1.jpg',
        description: 'Encontré este can en el futuro, alguien que no lo haya perdido aún?',
        likesCount: 100,
        commentsCount: 500
        },
      {
        authorAvatar: './img/Evange.jpg',
        authorName: 'Evangelina Anderson',
        postDate: 1439644264,
        principalImage: './img/img2.jpeg',
        description: 'Encontré este rrope cuando volvía de cambiarme las siliconas, es de alguien?',
        likesCount: 3524,
        commentsCount: 55624
        },
      {
        authorAvatar: './img/pipo.jpg',
        authorName: 'Pipo Cipolatti',
        postDate: 1269644264,
        principalImage: './img/img3.jpeg',
        description: 'No encontré ningún perro, pero esta foto se me hizo bonita',
        likesCount: 2314,
        commentsCount: 1324
        }
    ];



});
