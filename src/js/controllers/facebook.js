'use strict';

angular.module('starter.controllers').controller('facebookLoginController', function($scope, $cordovaOauth) {

  $scope.loginFacebook = function() {
    $cordovaOauth.facebook("902900406521982", ["email", "public_profile"], {
      redirect_uri: "http://localhost/callback"
    }).then(function(result) {
      console.log(result)
    }, function(error) {
      alert("There was a problem signing in!  See the console for logs");
      console.log(error);
    });
  };
})
