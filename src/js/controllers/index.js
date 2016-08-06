'use strict';

angular.module('starter.controllers').controller('indexController', function($scope, $rootScope, $ionicSideMenuDelegate, $ionicPopup, $state, storageService, platformService) {

  $scope.$on('$ionicView.enter', function() {
    if (platformService.isCordova) {
      $scope.user = storageService.getLocalUser();
      if (!$scope.user.userID) {
        $scope.user = null;
      }
    } else {
      $scope.user = true;
    }
  });

  $rootScope.$on('Local/FacebookLogin', function(event, user) {
    $scope.user = user;
    $state.go('home');
  });

  $rootScope.go = function(path) {
    $state.go(path);
    console.log('Transition to ' + path);
  };

  $scope.showLogOutMenu = function() {

    var logOutPopup = $ionicPopup.show({
      templateUrl: 'views/includes/alert.html',
      scope: $scope,
    });

    $scope.close = function() {
      logOutPopup.close();
    };

    $scope.logout = function() {
      // Facebook logout
      facebookConnectPlugin.logout(function() {
          console.log("Success logout");
          storageService.deleteLocalUser();
          $ionicSideMenuDelegate.toggleLeft();
          $scope.user = null;
          $state.go('facebook');
          logOutPopup.close();
        },
        function(fail) {
          console.log("Fail: " + fail);
          logOutPopup.close();
        });
    }
  }
})
