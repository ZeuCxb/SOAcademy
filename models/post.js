PostDB = new Meteor.Collection('post');

PostDB.getMePosts = function(_id, skip) {
    return this.findFaster({sender: _id}, {skip: skip, limit: 5}).fetch();
};