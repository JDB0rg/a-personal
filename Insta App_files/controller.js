angular.module('inApp')
  .controller('inCtrl', function($scope, $http, service, $state, $rootScope){

    $scope.reverse = true;

    $scope.makeHearts = function(){
      service.getFeed().then(function (response){
        $scope.userFeed = response;
      })
    }

    $scope.addHearts = function(id) {
      service.postHearts(id).then(function (heartsresponse){
        $rootScope.$emit("upload complete")
        $state.go("feed")
        $scope.userFeed = heartsresponse;
        $scope.makeHearts();
      })
    }

    $scope.seeUser = function(user) {
      service.makeUser(user).then(function (userresponse){
        $state.go("login")
        $scope.seeUser = userresponse;
      })
    }

    $scope.userLogin = function(login) {
      service.loginPass(login).then(function (loginresponse){
        $state.go("feed")
        $scope.userLogin = loginresponse;
      })
    }

  });
