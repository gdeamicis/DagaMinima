'use strict';

angular.module('starter').run(function($rootScope, $state, $log, $ionicPlatform, storageService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    console.log('Route change from:' + (fromState.name || '-') + ' to:' + toState.name);
    if (toState.name == 'facebook') {
      return;
    }
    if (!storageService.getLocalUser().userID && fromState.name != 'facebook') {
      event.preventDefault();
      $state.go('facebook');
    }
  });
})
