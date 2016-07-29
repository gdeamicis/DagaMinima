'use strict';

angular.module('starter.services').factory('sectionsService', function(lodash) {

  var root = {};

  root.sections = [{
    name: 'Adopt',
    pubs: [
      {
        authorAvatar: './img/mcfly.jpg',
        authorName: 'Marty McFly',
        postDate: 1469644264,
        principalImage: './img/img1.jpg',
        description: 'Este es mi perro es el mejor perro del mundo por favor adoptalo se llama Jesú.',
        likesCount: 1,
        commentsCount: 5
      }, {
        authorAvatar: './img/Evange.jpg',
        authorName: 'Evangelina Anderson',
        postDate: 1469644264,
        principalImage: './img/img2.jpeg',
        description: 'Este es mi perro Carlos, adoptalo se la banca',
        likesCount: 35,
        commentsCount: 556
      }, {
        authorAvatar: './img/pipo.jpg',
        authorName: 'Pipo Cipolatti',
        postDate: 1469644264,
        principalImage: './img/img3.jpeg',
        description: 'Miralo a Juan quiere un familia',
        likesCount: 23,
        commentsCount: 13
      }
      ],
    }, {
    name: 'Wanted',
    pubs: [
      {
        authorAvatar: './img/mcfly.jpg',
        authorName: 'Otro McFly',
        postDate: 1429644264,
        principalImage: './img/img1.jpg',
        description: 'Se me ha perdido Jesú. Por favor, encontralo.',
        likesCount: 25000,
        commentsCount: 10000
      }, {
        authorAvatar: './img/Evange.jpg',
        authorName: 'La Yehhniìí',
        postDate: 1469641264,
        principalImage: './img/img2.jpeg',
        description: 'Loco, no lo encuentro a Carlos.',
        likesCount: 5000000,
        commentsCount: 12000
      }, {
        authorAvatar: './img/pipo.jpg',
        authorName: 'Jose Jorge',
        postDate: 1469644234,
        principalImage: './img/img3.jpeg',
        description: 'Juan se escapó de mi cantri, alguien que lo haya visto?',
        likesCount: 2,
        commentsCount: 1
      }
      ],
    }, {
    name: 'Lost',
    pubs: [
      {
        authorAvatar: './img/mcfly.jpg',
        authorName: 'Marty McFly',
        postDate: 1465644264,
        principalImage: './img/img1.jpg',
        description: 'Encontré este can en el futuro, alguien que no lo haya perdido aún?',
        likesCount: 100,
        commentsCount: 500
      }, {
        authorAvatar: './img/Evange.jpg',
        authorName: 'Evangelina Anderson',
        postDate: 1439644264,
        principalImage: './img/img2.jpeg',
        description: 'Encontré este rrope cuando volvía de cambiarme las siliconas, es de alguien?',
        likesCount: 3524,
        commentsCount: 55624
      }, {
        authorAvatar: './img/pipo.jpg',
        authorName: 'Pipo Cipolatti',
        postDate: 1269644264,
        principalImage: './img/img3.jpeg',
        description: 'No encontré ningún perro, pero esta foto se me hizo bonita',
        likesCount: 2314,
        commentsCount: 1324
      }
    ],
  }];

  root.getSectionPubs = function(section) {
    return lodash.find(root.sections, {
      'name': section
    }).pubs;
  }

  return root;

})
