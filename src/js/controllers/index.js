'use strict';

angular.module('starter.controllers').controller('indexController', function($scope, $rootScope, $timeout, $state, storageService) {

  $scope.$on('$ionicView.enter', function() {
    $scope.isLoged = JSON.stringify(storageService.getUser()) == '{}' ? null : storageService.getUser();
    if (!$scope.isLoged) {
      $state.go('facebook');
    }
  });

  $rootScope.$on('Local/FacebookLogin', function(event, isLoged) {
    $scope.isLoged = isLoged;
  });

})
