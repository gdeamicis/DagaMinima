angular.module('starter.controllers').controller('postsController', function($scope, $rootScope, $state) {
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
