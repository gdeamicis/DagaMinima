'use strict';

angular.module('starter.controllers').controller('indexController', function($scope, $rootScope, $timeout, $state, storageService) {

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

})
