'use strict';

angular.module('starter.services').factory('storageService', function($http, $log) {

  var root = {};

  root.setUser = function(user, cb) {
    var req = {
      method: 'POST',
      url: 'http://192.168.1.109:3000/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: user
    };

    $http(req).then(function(data) {
      return cb(null, data.data);
    }, function(err) {
      return cb(err);
    });
  };

  root.getUser = function(userID, cb) {
    var req = {
      method: 'GET',
      url: 'http://192.168.1.109:3000/login/' + userID,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
    $http(req).then(function(data) {
      return cb(null, data.data);
    }, function(err) {
      return cb(err);
    });
  };

  root.setLocalUser = function(user) {
    window.localStorage.setItem('user', JSON.stringify(user));
  };

  root.getLocalUser = function() {
    return JSON.parse(window.localStorage.user || '{}');
  };

  root.deleteLocalUser = function() {
    window.localStorage.removeItem('user');
  };

  return root;
});
