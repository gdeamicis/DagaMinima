'use strict';

angular.module('starter.controllers').controller('indexController', function($scope, $rootScope, $state, storageService, platformService) {

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

});
