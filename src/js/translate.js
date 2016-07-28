'use strict';

angular.module('starter').config(function($translateProvider) {

    $translateProvider.useStaticFilesLoader({
      prefix: 'data/locale-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.fallbackLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.forceAsyncReload(true);
    $translateProvider.useLocalStorage();
  })
  .run(function($ionicPlatform, $translate, storageService, languageService) {
    $ionicPlatform.ready(function() {
      if (storageService.getCurrentLanguage()) languageService.setPreferredLanguage();
    });
  });
