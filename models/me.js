MeDB = new Meteor.Collection('me');

MeDB.createMe = function(me) {
    this.insert(me);
};

MeDB.getMe = function(_id) {
    return this.findOneFaster({_id: _id});
};

MeDB.getMeName = function(_id) {
    var me = this.findOneFaster({_id: _id});
    return me.nick;
};