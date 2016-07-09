'use strict';

angular.module('starter').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'views/search.html'
      }
    }
  })

  .state('browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'views/browse.html'
      }
    }
  })

  .state('facebook', {
    url: '/facebook',
    views: {
      'menuContent': {
        templateUrl: 'views/facebook.html',
      }
    }
  })

  .state('single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'views/playlist.html',
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/facebook');
});
