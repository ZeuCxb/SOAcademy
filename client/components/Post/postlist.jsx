PostList = React.createClass({
    propTypes: {
        _id: React.PropTypes.string.isRequired
    },
    mixins: [ReactMeteorData],
    getMeteorData() {
        var _id = this.props._id;
        var posts = false;

        var handle = Meteor.subscribe('post', _id);

        if(handle.ready()) {
            posts = PostDB.getMePosts(_id, 0);
        }

        return {
            posts: posts
        }
    },
    render() {
        var posts = this.data.posts;

        if(posts) {
            var view = <div>
                {posts.map(function(post) {
                    return <Post key={post._id} data={post} />;
                })}
            </div>;
        } else {
            var view = <div>
                <div className="mdl-cell mdl-cell--12-col mdl-typography--text-center mdl-color-text--red">
                    NO POST YET!
                </div>
            </div>;
        }

        return(
            <div>
                {view}
            </div>
        );
    }
});