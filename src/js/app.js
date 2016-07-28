// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

'use strict';

var modules = [
  'ionic',
  'ngCordova',
  'ngLodash',
  'pascalprecht.translate',
  'ngCookies',
  'angularMoment',
  'starter.controllers',
  'starter.services',
];

var starter = angular.module('starter', modules);

angular.module('starter.services', []);
angular.module('starter.controllers', []);
