angular.module("inApp")
  .service("service", function($http){

    this.getFeed = function(){
      return $http({
          method: 'GET',
          url: '/api/photo'
        }).then(function (response) {
          console.log("get" + response);
          return response.data;
        })
    },

    this.postHearts = function(id){
      return $http({
          method: 'POST',
          url: '/api/photo/' + id
      }).then(function (response) {
        console.log("hearts res" + response);
        return response.data;
      })
    },

    this.makeUser = function(user){
      return $http({
          method: 'POST',
          data: user,
          url: '/api/user/'
    }).then(function (response) {
      console.log("new user" + response);
      return response.data;
    })
  },

////////Passport Login////////////
  this.loginPass = function(login){
    return $http({
            method: 'POST',
            data: login,
            url: '/login'
      }).then(function (response) {
        console.log("new user" + response);
        return response.data;
      })
  }

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

  })
