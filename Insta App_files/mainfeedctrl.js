angular.module('inApp')
  .controller('mainFeedCtrl', function($scope, $http, userFeedService, $rootScope, $state){

    var refresh = function() {
      userFeedService.getFeed().then(function (response){
      $scope.userFeed = response;
      })
    }

    refresh();
    $rootScope.$on("upload complete", refresh)

    $scope.postStatusComment = function(comment, id) {
      userFeedService.postComment(comment, id).then(function (response){
      $scope.postStatusComment = response;
      $state.reload('feed');
      })
    }

    ///////Date Since Function////////////
    $scope.createdAt = {

      date: function (date1, date2) {
        var date1 = new Date(2016);
        var date2 = new Date();
        var timeDiff = date2 - date1;
        var diffDays = Math.round(timeDiff / (1000 * 60 * 60 * 24 * 365));
        // console.log(timeDiff + " time");
        // console.log(diffDays + " diff");
        // console.log(date1 + " date1");
        // console.log(date2 + " date2");

          if(diffDays === 0) return diffDays = " today";
          else if  (diffDays === 1) return diffDays + " d";
          else if  (diffDays <= 7) return diffDays + " d";
          else return "";
        }
      }
});


// var date1 = new Date(this.servTest[1].post_date);
// var date2 = new Date();
// var timeDiff = Math.abs(date2.getTime() - date1.getTime());
// var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
// console.log(timeDiff);
// console.log(diffDays);
//
//   if(diffDays === 0) this.servDate = " today";
//   else if  (diffDays === 1) this.servDate = 1 + " day";
//   else if  (diffDays <= 31) this.servDate = "23 days";
//   else if  (diffDays >= 31) this.servDate = "2 weeks";
