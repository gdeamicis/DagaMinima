'use strict';

angular.module('starter.controllers').controller('sidebarController', function($scope, $state, $ionicPopup, storageService) {

  $scope.section = 'Adopt';

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

  $scope.changeSection = function(section) {
    $scope.section = section;
  }

});
