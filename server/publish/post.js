Meteor.autorun(function() {
    Meteor.publish('post', function (_id) {
        return PostDB.findFaster({sender: _id});
    });
});