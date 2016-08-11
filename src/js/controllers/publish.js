'use strict';

angular.module('starter.controllers').controller('publishController', function($scope, $cordovaCamera, $ionicPlatform, $state, $timeout, $ionicPopup, $ionicModal, $translate, storageService, publicationService) {

  $scope.formData = {};
  $scope.formData.imgURI = null;
  $scope.formData.category = null;
  $scope.formData.description = null;
  $scope.err = null;

  $scope.resetError = function() {
    $scope.err = null;
  }

  $scope.categoryPopup = function() {

    var categoryPopup = $ionicPopup.show({
      templateUrl: './views/includes/categoryPopup.html',
      scope: $scope
    });

    $scope.cancel = function() {
      categoryPopup.close();
    };

    $scope.accept = function(category) {
      $scope.formData.category = category;
      categoryPopup.close();
    };
  }

  $scope.sendPopup = function() {

    if (!$scope.formData.category || !$scope.formData.description || !$scope.formData.imgURI) return;

    var categoryPopup = $ionicPopup.show({
      templateUrl: './views/includes/sendPopup.html',
      scope: $scope
    });

    $scope.cancel = function() {
      categoryPopup.close();
    };

    $scope.accept = function() {

      var userID = storageService.getLocalUser().user;
      var creationTime = moment().unix();

      var request = {
        userID: userID,
        description: $scope.formData.description,
        imageURI: $scope.formData.imgURI,
        category: $scope.formData.category,
        creationTime: creationTime
      }

      publicationService.setPublication(request, function(err, success) {
        if (err) {
          console.log('Set pulication error: ', JSON.stringify(err));
          $scope.err = err;
          categoryPopup.close();
          return;
        }
        console.log('SUCCESS: ' + success);

        categoryPopup.close();
        $scope.openStatusModal();
      });
    }
  }

  $scope.openStatusModal = function() {

    $ionicModal.fromTemplateUrl('views/includes/status.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.statusModal = modal;
      $scope.statusModal.show();
    });

    $scope.close = function() {
      $scope.statusModal.hide();
      $timeout(function() {
        $state.go('sections');
      }, 10);
    };
  }

  $scope.fromCamera = function() {
    var options = {
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.formData.imgURI = "data:image/jpeg;base64," + imageData;

    }, function(err) {
      console.log('From camera :' + err);
    });

  }

  $scope.fromGallery = function() {
    var options = {
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.formData.imgURI = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      console.log('From gallery :' + err);
    });
  }

  var deregister = $ionicPlatform.registerBackButtonAction(function() {
    if (!$scope.formData.imgURI) $state.go('sections');
    $scope.formData.imgURI = null;
  }, 101);

  $scope.$on('$destroy', deregister);

});
