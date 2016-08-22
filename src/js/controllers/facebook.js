'use strict';

angular.module('starter.controllers').controller('facebookLoginController', function($scope, $rootScope, $state, $log, $ionicSideMenuDelegate, storageService, facebookService) {

  $ionicSideMenuDelegate.canDragContent(false);
  // This is the success callback from the login method
  var fbLoginSuccess = function(success) {
    if (!success.authResponse) {
      fbLoginError("Cannot find the authResponse");
      return;
    }

    var authResponse = success.authResponse;

    getFacebookProfileInfo(authResponse, function(profileInfo, err) {
      if (err) {
        // Fail get profile info
        console.log('profile info fail: ' + err);
        return;
      }

      var user = {
        facebookToken: authResponse,
        userID: profileInfo.id,
        name: profileInfo.name,
        email: profileInfo.email,
        picture: "http://graph.facebook.com/" + authResponse.userID + "/picture?width=600&height=600"
      };

      storageService.setLocalUser(user);

      checkRemoteCredentials(user.userID, user.name, user.facebookToken, function(val) {
        if (val) $rootScope.$emit('Local/FacebookLogin', user);
      });
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

  var checkRemoteCredentials = function(userID, name, facebookToken, cb) {
    facebookService.getUser(userID, function(err, data) {
      if (err) {
        console.log("could not get data from server: " + JSON.stringify(err));
      }

      if (data != 'User not found') {
        console.log("Success get request from server: " + JSON.stringify(data));
        return cb(true);
      } else {
        console.log("Success get request from server: " + JSON.stringify(data));

        facebookService.setUser({
          userID: userID,
          name: name,
          picture: "http://graph.facebook.com/" + facebookToken.userID + "/picture?width=600&height=600"
        }, function(err, data) {
          if (err) {
            console.log("could not save data on server: " + JSON.stringify(err));
            return cb(false);
          }
          console.log("Data saved on server: " + JSON.stringify(data));
          return cb(true);
        });
      }
    });
  };
  //This method is executed when the user press the "Login with facebook" button
  $scope.facebookSignIn = function() {
    facebookConnectPlugin.getLoginStatus(function(success) {
      if (success.status === 'connected') {
        // The user is logged in and has authenticated your app, and success.authResponse supplies
        // the user's ID, a valid access token, a signed request, and the time the access token
        // and signed request each expire
        console.log('getLoginStatus: ' + success.status);

        // Check if we have our user saved
        var user = storageService.getLocalUser();

        if (!user.userID) {
          getFacebookProfileInfo(success.authResponse, function(profileInfo, err) {
            if (err) {
              // Fail get profile info
              console.log('profile info fail: ' + err);
              return;
            }

            var user = {
              facebookToken: success.authResponse,
              userID: profileInfo.id,
              name: profileInfo.name,
              email: profileInfo.email,
              picture: "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
            };

            storageService.setLocalUser(user);

            checkRemoteCredentials(user.userID, user.name, user.facebookToken, function(val) {
              if (val) $rootScope.$emit('Local/FacebookLogin', user);
            });
          });
        } else {
          $rootScope.$emit('Local/FacebookLogin', user);
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
});
