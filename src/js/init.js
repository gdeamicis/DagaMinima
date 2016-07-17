'use strict';

angular.module('starter').run(function($ionicPlatform) {
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

    $ionicPlatform.on('backbutton', function(event) {
      var loc = window.location;
      var fromFacebook = loc.toString().match(/facebook/g) ? true : false;
      var fromHome = loc.toString().match(/home/g) ? true : false;
      if (fromFacebook == true || fromHome == true)
        navigator.app.exitApp();
    });
  });
})
