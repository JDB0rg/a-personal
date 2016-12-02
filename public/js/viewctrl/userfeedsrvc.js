angular.module("inApp")
  .service("userFeedService", function($http){

    this.getFeed = function(){
      return $http({
          method: 'GET',
          url: '/api/photo'
        }).then(function (response) {
          console.log("get photos" + response);
          return response.data;
        })
    },

    this.userPhotos = function(){
      return $http({
          method: 'GET',
          url: '/me'
      }).then(function (response) {
        console.log("User Resp" + response);
        return response.data;
      })
    },

    this.postComment = function(comment, id) {
      return $http({
        method: 'PUT',
        data: comment,
        url: '/api/photo/' + id
      })
        .then(function (response) {
          console.log("Comment" + response);
          return response.data;
          $state.reload('feed');
        })
    },

    this.updateProfile = function(id) {
    return $http({
        method: 'PUT',
        data: user,
        url: '/api/user/' + id
      }).success(function() {
        $state.reload('edit');
      })
    }
})
