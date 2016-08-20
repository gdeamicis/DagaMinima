'use strict';

angular.module('starter.services').factory('sectionsService', function(lodash) {

  var root = {};

  root.sections = [{
    name: 'Adopt',
    pubs: [
      {
        picture: './img/mcfly.jpg',
        name: 'Marty McFly',
        creationTime: 1469644264,
        imageURI: './img/img1.jpg',
        description: 'Este es mi perro es el mejor perro del mundo por favor adoptalo se llama Jesú.',
        category: 'Adopt'
      }, {
        picture: './img/Evange.jpg',
        name: 'Evangelina Anderson',
        creationTime: 1469644264,
        imageURI: './img/img2.jpeg',
        description: 'Este es mi perro Carlos, adoptalo se la banca',
        category: 'Adopt'
      }, {
        picture: './img/pipo.jpg',
        name: 'Pipo Cipolatti',
        creationTime: 1469644264,
        imageURI: './img/img3.jpeg',
        description: 'Miralo a Juan quiere un familia',
        category: 'Adopt'
      }
      ],
    }, {
    name: 'Wanted',
    pubs: [
      {
        picture: './img/mcfly.jpg',
        name: 'Otro McFly',
        creationTime: 1429644264,
        imageURI: './img/img1.jpg',
        description: 'Se me ha perdido Jesú. Por favor, encontralo.',
        category: 'Wanted'
      }, {
        picture: './img/Evange.jpg',
        name: 'La Yehhniìí',
        creationTime: 1469641264,
        imageURI: './img/img2.jpeg',
        description: 'Loco, no lo encuentro a Carlos.',
        category: 'Wanted'
      }, {
        picture: './img/pipo.jpg',
        name: 'Jose Jorge',
        creationTime: 1469644234,
        imageURI: './img/img3.jpeg',
        description: 'Juan se escapó de mi cantri, alguien que lo haya visto?',
        category: 'Wanted'
      }
      ],
    }, {
    name: 'Lost',
    pubs: [
      {
        picture: './img/mcfly.jpg',
        name: 'Marty McFly',
        creationTime: 1465644264,
        imageURI: './img/img1.jpg',
        description: 'Encontré este can en el futuro, alguien que no lo haya perdido aún?',
        category: 'Lost'
      }, {
        picture: './img/Evange.jpg',
        name: 'Evangelina Anderson',
        creationTime: 1439644264,
        imageURI: './img/img2.jpeg',
        description: 'Encontré este rrope cuando volvía de cambiarme las siliconas, es de alguien?',
        category: 'Lost'
      }, {
        picture: './img/pipo.jpg',
        name: 'Pipo Cipolatti',
        creationTime: 1269644264,
        imageURI: './img/img3.jpeg',
        description: 'No encontré ningún perro, pero esta foto se me hizo bonita',
        category: 'Lost'
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
