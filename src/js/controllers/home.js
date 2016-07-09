'use strict';

angular.module('starter.controllers').controller('homeController', function($scope, $rootScope, storageService, $ionicPopup, $state) {

  $scope.$on('$ionicView.enter', function() {
    $scope.user = storageService.getUser();
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
          storageService.deleteUser();
          $rootScope.$emit('Local/FacebookLogin', false);
          $state.go('facebook');
          logOutPopup.close();
        },
        function(fail) {
          console.log("Fail: " + fail);
          logOutPopup.close();
        });
    }
  }
});
