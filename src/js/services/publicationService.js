'use strict';

angular.module('starter.services').factory('publicationService', function($http, $log) {

  var root = {};

  root.setPublication = function(data, cb) {
    var req = {
      method: 'POST',
      url: 'http://192.168.1.109:3000/publication',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: data
    };

    $http(req).then(function(data) {
      return cb(null, data.data);
    }, function(err) {
      return cb(err);
    });
  };

  return root;
});
