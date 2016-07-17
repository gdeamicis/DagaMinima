'use strict';

angular.module('starter.controllers').controller('indexController', function($scope, $rootScope, storageService, $ionicPopup, $state) {

  $scope.$on('$ionicView.enter', function() {
    $scope.user = storageService.getLocalUser();
    if (!$scope.user.userID) {
      $scope.user = null;
    }
  });

  $rootScope.$on('Local/FacebookLogin', function(event, user) {
    $scope.user = user;
    if (user) $state.go('home');
  });

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
          $rootScope.$emit('Local/FacebookLogin', null);
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
