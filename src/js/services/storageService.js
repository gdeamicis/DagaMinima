'use strict';

angular.module('starter.services').factory('storageService', function() {

  var root = {};
  // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
  root.setUser = function(user_data) {
    window.localStorage.setItem('starter_facebook_user', JSON.stringify(user_data));
  };

  root.getUser = function() {
    return JSON.parse(window.localStorage.starter_facebook_user || '{}');
  };

  root.deleteUser = function() {
    window.localStorage.removeItem('starter_facebook_user');
  };

  return root;
});
