angular.module('inApp')
  .controller('editctrl', function($scope, $http, userFeedService, $rootScope){

    var refresh = function() {
      userFeedService.getFeed().then(function(response){
      $scope.editFeed = response
      })
    }
    $rootScope.$on("upload complete", refresh)

    userFeedService.userPhotos().then(function (resp){
    $scope.editFeed = resp;
    })

    $scope.updateProfile = function(id) {
      userFeedService.updateProfile(id);
  }
});

// angular.module('inApp')
//   .controller('editctrl', function($scope, $http, userFeedService){
//
//     userFeedService.getFeed().then(function (response){
//     $scope.userFeed = response;
//     })
// });
