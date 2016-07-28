'use strict';

angular.module('starter.controllers').controller('settingsController', function($scope, $state, $translate, storageService, languageService) {

  $scope.availableLanguages = languageService.getLanguages();
  $scope.currentLanguage = storageService.getCurrentLanguage();

  $scope.changeLanguage = function(key) {
    $translate.use(key);
  };
});
