'use strict';

angular.module('starter.controllers').controller('homeController', function($scope, $state) {
    $scope.go = function ( path ) {
        $state.go(path);
    };
});
