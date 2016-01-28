MeDB = new Meteor.Collection('me');

MeDB.createMe = function(me) {
    this.insert(me);
};

MeDB.getMe = function(_id) {
    return this.findOneFaster({_id: _id});
};