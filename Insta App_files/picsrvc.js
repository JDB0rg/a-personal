angular.module('inApp')

  .service('imagesService', function($http, $rootScope) {

    this.storeImage = function(imageData, fileName, email) {
        var imageExtension = imageData.split(';')[0].split('/');
        imageExtension = imageExtension[imageExtension.length - 1];

        var newImage = {
          imageName: fileName,
          imageBody: imageData,
          imageExtension: imageExtension,
          userEmail: email
      };
      return $http.post('/api/newimage', newImage)
      .then(function(anything){
          $rootScope.$emit("upload complete")
              return anything;
      })

  };
})
