'use strict';

angular.module('starter').config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $stateProvider

    .state('facebook', {
    url: '/facebook',
    views: {
      'menuContent': {
        templateUrl: 'views/facebook.html',
      }
    }
  })

  .state('home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'views/home.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise(function($injector, $location) {
    var $state = $injector.get("$state");
    $state.go("home");
  });
});
