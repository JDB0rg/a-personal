var Photo = require('./../photo.js')

module.exports = {

  createPhoto: function (req, res, next) {
    var PhotoObj = new Photo(req.body);
      PhotoObj.save(function(err, response){
        if(err) {
          return res.status(500).json(err);
        } else {
          return res.json(response);
        }
    })
  },

  getPhotos: function(req, res, next){
    Photo
      .find()
      .populate('author')
      .exec( function (err, response){
        if(err) {
          res.status(500).json(err)
        } else {
          res.json(response)
        }
      })
  },

  getPhotoId: function (req, res, next) {
      Photo
        .findById(req.params.id)
        .populate('author')
        .exec( function (err, response){
          if(err) {
            res.status(500).json(err)
          } else {
            res.json(response)
          }
      })
  },

  updatePhotoId: function (req, res, next) {
    if(!req.params.id){
  		return res.status(400).send('id query needed');
  	}
      Photo.findByIdAndUpdate(req.params.id,
        req.body,
        {new: true, upsert: true},
        function(err, response){
          if(err) {
            return res.status(500).send(err);
          } else {
            return res.send(response);
          }
        })
  },

  // postComment: function (req, res, next) {
  //   if(!req.params.id){
  //     return res.status(400).send('id query needed');
  //   }
  //     Photo.findByIdAndUpdate(req.params.id,
  //       req.body,
  //       {new: true, upsert: true},
  //       function(err, response){
  //         if(err) {
  //           return res.status(500).send(err);
  //         } else {
  //           return res.send(response);
  //         }
  //       })
  //     },

  postComment: function(req, res, next) {
    var id = req.params.id;
      var comment = {user: req.user._id};
      Daily.findByIdAndUpdate(id, {$push: {comments: comment}}, function(err, response) {
          if (err) res.status(500).json(err);
          else res.status(200).json(response);
      })
  },

      updateHearts: function (req, res, next) {
        if(!req.params){
      		return res.status(400).send('id query needed');
      	}
          Photo.findByIdAndUpdate(req.params.id,
            {$inc: {hearts: 1}},
            // {new: true, upsert: true},
            function(err, response){
              console.log(err, response);
              if(err) {
                return res.status(500).send(err);
              } else {
                return res.send(response);
              }
            })
          }

}
