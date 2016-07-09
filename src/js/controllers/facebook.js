'use strict';

angular.module('starter.controllers').controller('facebookLoginController', function($scope, $rootScope, $state, storageService) {
  // This is the success callback from the login method
  var fbLoginSuccess = function(response) {
    if (!response.authResponse) {
      fbLoginError("Cannot find the authResponse");
      return;
    }

    var authResponse = response.authResponse;

    getFacebookProfileInfo(authResponse, function(profileInfo, err) {
      if (err) {
        // Fail get profile info
        console.log('profile info fail: ' + err);
        return;
      }
      // For the purpose of this example I will store user data on local storage
      storageService.setUser({
        authResponse: authResponse,
        userID: profileInfo.id,
        name: profileInfo.name,
        email: profileInfo.email,
        picture: "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
      });
      $rootScope.$emit('Local/FacebookLogin', true);
      $state.go('home');
    });
  };

  // This is the fail callback from the login method
  var fbLoginError = function(err) {
    console.log('fbLoginError: ' + JSON.stringify(err));
  };

  // This method is to get the user profile info from the facebook api
  var getFacebookProfileInfo = function(authResponse, cb) {
    facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
      function(success) {
        console.log(JSON.stringify(success));
        return cb(success, null);
      },
      function(err) {
        console.log(JSON.stringify(err));
        return cb(null, err);
      });
  };

  //This method is executed when the user press the "Login with facebook" button
  $scope.facebookSignIn = function() {
    facebookConnectPlugin.getLoginStatus(function(success) {
      if (success.status === 'connected') {
        // The user is logged in and has authenticated your app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed request, and the time the access token
        // and signed request each expire
        console.log('getLoginStatus: ' + success.status);

        // Check if we have our user saved
        var user = storageService.getUser('facebook');

        if (!user.userID) {
          getFacebookProfileInfo(success.authResponse, function(profileInfo, err) {
            if (err) {
              // Fail get profile info
              console.log('profile info fail: ' + err);
              return;
            }

            // For the purpose of this example I will store user data on local storage
            storageService.setUser({
              authResponse: success.authResponse,
              userID: profileInfo.id,
              name: profileInfo.name,
              email: profileInfo.email,
              picture: "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
            });

            $rootScope.$emit('Local/FacebookLogin', true);
            $state.go('home');
          });
        } else {
          $rootScope.$emit('Local/FacebookLogin', true);
          $state.go('home');
        }
      } else {
        // If (success.status === 'not_authorized') the user is logged in to Facebook,
        // but has not authenticated your app
        // Else the person is not logged into Facebook,
        // so we're not sure if they are logged into this app or not.
        console.log('getLoginStatus: ' + success.status);
        // Ask the permissions you need. You can learn more about
        // FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
        facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
      }
    });
  };
})
