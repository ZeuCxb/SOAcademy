Meteor.methods({
    createMe: function (me) {
        MeDB.createMe(me);
    }
});