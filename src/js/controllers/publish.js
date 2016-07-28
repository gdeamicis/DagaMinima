'use strict';

angular.module('starter.controllers').controller('publishController', function($scope, $cordovaImagePicker, $cordovaCamera, $ionicPlatform, $state, $ionicPopup, $translate) {

  $scope.images = [];
  $scope.formData = {};

  $scope.categoryPopup = function() {
    $scope.data = {};

    var myPopup = $ionicPopup.show({
      title: 'Choose a Category',
      scope: $scope,
      cssClass: 'popup-vertical-buttons',
      buttons: [
        {
          text: $translate.instant('publish_adopt'),
          type: 'button-full button-positive',
          onTap: function(e) {
            $scope.formData.category = 'Adopt';
          }
        },
        {
          text: $translate.instant('publish_lost'),
          type: 'button-full button-positive',
          onTap: function(e) {
            $scope.formData.category = 'Lost';
          }
        },
        {
          text: $translate.instant('publish_found'),
          type: 'button-full button-positive',
          onTap: function(e) {
            $scope.formData.category = 'Found';
          }
        },
      ]
    });
  }

  $scope.sendPopup = function() {
    $scope.data = {};

    if($scope.formData.category){

      var confirmPopup = $ionicPopup.confirm({
        title: 'Publicate',
        cssClass: 'popup-vertical-buttons',
        template: 'Are you sure you want to publicate this on ' + $scope.formData.category + '?',
        cancelText: 'Mmm... Not Yet',
        okText: 'Yeah! Upload it!',
        okType: 'button-balanced'
      });

      confirmPopup.then(function(res) {
        if(res){

          //DEFINE REQUEST
          var request = {
            userID: 1,
            description: $scope.formData.description,
            photo: 1,
            category: $scope.formData.category
          }
          console.log(request.description);
          console.log(request.category);
          //UPLOAD

          //ERASE DESCRIPTION TEXT
          document.getElementById("descriptionText").value='';
          document.getElementById("descriptionLabel").hide();
          //GO HOME
          $state.go('home');
        }
      })
    } else { //If category unselected

      var alertCategoryPopup = $ionicPopup.alert({
        title: 'Category not selected!',
        template: 'Please, select a category'
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
