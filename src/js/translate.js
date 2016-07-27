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
  })
  .run(function($ionicPlatform, $translate, lodash) {
    $ionicPlatform.ready(function() {

      var availableLanguages = [{
        name: 'English',
        isoCode: 'en',
      }, {
        name: 'Español',
        isoCode: 'es',
      }];

      var isAvailableLanguage = function(language) {
        return lodash.find(availableLanguages, {
          'isoCode': language
        }) ? language : 'en';
      };

      if (!lodash.isUndefined(navigator.globalization)) {
        navigator.globalization.getPreferredLanguage(function(preferedLanguage) {

          var language = preferedLanguage.value;
          language = language ? (language.split("-")[0] || 'en') : 'en';

          // Set only available languages
          language = isAvailableLanguage(language);

          $translate.use(language).then(function(data) {
            console.log("SUCCESS -> " + data);
          }, function(error) {
            console.log("ERROR -> " + error);
          });
        }, null);
      }
    });
  });
