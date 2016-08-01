'use strict';

angular.module('starter.controllers').controller('publishController', function($scope, $cordovaImagePicker, $cordovaCamera, $ionicPlatform, $state, $ionicPopup, $translate, storageService) {

  $scope.images = [];
  $scope.formData = {};

  $scope.categoryPopup = function() {
    $scope.data = {};

    var myPopup = $ionicPopup.show({
      title: $translate.instant('publish_categoryChoosePopup'),
      scope: $scope,
      cssClass: 'popup-vertical-buttons',
      buttons: [
        {
          text: $translate.instant('publish_adopt'),
          type: 'button-full button-dark',
          onTap: function(e) {
            $scope.formData.category = 'Adopt';
          }
        },
        {
          text: $translate.instant('publish_wanted'),
          type: 'button-full button-dark',
          onTap: function(e) {
            $scope.formData.category = 'Wanted';
          }
        },
        {
          text: $translate.instant('publish_found'),
          type: 'button-full button-dark',
          onTap: function(e) {
            $scope.formData.category = 'Found';
          }
        },
      ]
    });
  }

  $scope.sendPopup = function() {
    $scope.data = {};

    if ($scope.formData.category) {

      var confirmPopup = $ionicPopup.confirm({
        title: $translate.instant('publish_publicatePopup'),
        cssClass: '',
        template: $translate.instant('publish_publicatePopupText') +
          ($scope.formData.category === 'Adopt' ? $translate.instant('publish_adopt') : $scope.formData.category === 'Wanted' ? $translate.instant('publish_wanted') : $translate.instant('publish_found')) +
          '?',
        cancelText: $translate.instant('publish_publicatePopupCancel'),
        canelType: 'button',
        okText: $translate.instant('publish_publicatePopupOk'),
        okType: 'button-dark'
      });

      confirmPopup.then(function(res) {
        if (res) {

          //DEFINE REQUEST
          var request = {
            userID: storageService.getLocalUser(),
            description: $scope.formData.description,
            photo: 1,
            category: $scope.formData.category,
            timestamp: moment().unix()
          }

          console.log(request);

          //UPLOAD

          //ERASE DESCRIPTION TEXT
          $scope.descriptionText = '';
          //GO HOME
          $state.go('home');
        }
      })
    } else { //If category unselected

      var alertCategoryPopup = $ionicPopup.alert({
        title: $translate.instant('publish_categoryAlertPopup'),
        template: $translate.instant('publish_categoryAlertPopupText')
      })
    }


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
      $scope.imgURI = "data:image/jpeg;base64," + imageData;

    }, function(err) {
      // error
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
    if (!$scope.imgURI) $state.go('home');
    $scope.imgURI = null;
  }, 101);
  $scope.$on('$destroy', deregister);
});
