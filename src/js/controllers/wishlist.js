'use strict';

angular.module('starter.controllers').controller('wishlistController', function($scope, $rootScope, $state, storageService) {
  $scope.favoritePubs = storageService.getFavoritePubs();
});
