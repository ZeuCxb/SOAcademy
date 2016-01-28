Meteor.autorun(function() {
    Meteor.publish('me', function (_id) {
        return MeDB.findFaster({_id: _id});
    });
});