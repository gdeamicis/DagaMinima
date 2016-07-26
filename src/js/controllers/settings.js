'use strict';

angular.module('starter.controllers').controller('settingsController', function($scope, $state, $translate) {
    $scope.switchLanguage = function(key) {
        if ($translate.use() === key) {
            $translate.use('en');
        } else {
            $translate.use(key);
        }
    };
});
