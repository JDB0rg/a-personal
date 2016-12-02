angular.module("inApp")
  .directive('userGallery', function() {
    return {
        link: function(scope, element, attrs) {

          $(element).find('div').click(function() {
            //////find class that applies to the image////////
            $(this).find('img').toggleClass("gallery-pic-change")
          });
        }
    }
});
