const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
  user: {
    //store by objectID
    type: mongoose.Schema.Types.ObjectId,
    //ref to User Model
    ref: 'User',
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    //trim white space
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  //comments array
  likes: [
    {
        //store by ibjectID
      type: mongoose.Schema.Types.ObjectId,
      //refer to User model, shows what users liked the post
      ref: 'User',
    },
  ],
  //sets up comments as arr with 2 properties
  comments: [
    {
      //store Id's generated by MongoDB
      type: mongoose.Schema.Types.ObjectId,
      //ref objectId in Comments model
      ref: 'Comment',
    },
  ],
},{
  timestamps: true,
}
);

const Posts = mongoose.model('Post', postsSchema);
module.exports = Posts;