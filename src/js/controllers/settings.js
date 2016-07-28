'use strict';

angular.module('starter.controllers').controller('settingsController', function($scope, $state, $translate, storageService, languageService, amMoment) {

  $scope.availableLanguages = languageService.getLanguages();
  $scope.currentLanguage = storageService.getCurrentLanguage();

  $scope.changeLanguage = function(key) {
    amMoment.changeLocale(key);
    $translate.use(key);
  };
});
