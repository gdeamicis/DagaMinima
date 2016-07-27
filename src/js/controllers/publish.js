'use strict';

angular.module('starter.controllers').controller('publishController', function($scope, $cordovaImagePicker, $cordovaCamera, $ionicPlatform, $state) {

  $scope.images = [];

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
      $scope.imgURI = "data:image/jpeg;base64," + imageData;

    }, function(err) {
      // error
    });

  }

  $scope.fromGallery = function(){
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
      $scope.imgURI = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });
  }



/*
  $scope.fromGallery = function() {
    var options = {

      maximumImagesCount: 1,
      width: 800,
      height: 800,
      quality: 80
    };

    $cordovaImagePicker.getPictures(options)
      .then(function(results) {
        for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          $scope.images[i] = results[i];
          $scope.imagesNotEmpty = true;
        }
      }, function(error) {
        // error getting photos
      });
  }*/

  var deregister = $ionicPlatform.registerBackButtonAction(function() {
    if($scope.imgURI !== undefined){
      $scope.imgURI = undefined;
    } else {
      $state.go('home');
    }
  }, 101);

  $scope.$on('$destroy', deregister);
});
