Perfil = React.createClass({
    propTypes: {
        _id: React.PropTypes.string.isRequired,
        nick: React.PropTypes.string.isRequired,
        about: React.PropTypes.string,
        background: React.PropTypes.string
    },
    render() {
        var _id = this.props._id;
        var nick = this.props.nick;
        var about = this.props.about;
        var background = this.props.background;

        var currentUser = Session.get('currentUser');

        if(currentUser._id === _id) {
            var me = true;
        } else {
            var me = false;
        }

        if(me) {
            var editButton = <div className="mdl-cell--1-col mdl-typography--text-right">
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect">
                    <i className="material-icons">mode_edit</i>
                </button>
            </div>;
        } else {
            var fallowButton = <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--pink">
                Fallow
            </button>
        }

        var style = {};

        if(!about) {
            about = '...';
        }

        if(!background) {
            background = 'img2.jpg';
        }

        style.background = 'url("/img/' + background + '") center/cover !important';

        return(
            <div>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col">
                        <div className="mdl-card mdl-shadow--2dp card perfil-box" style={style}>
                            <div className="mdl-card__title mdl-card--expand">
                                <h2 className="mdl-cell--11-col mdl-card__title-text mdl-typography--text-uppercase">{nick}</h2>
                                {editButton}
                            </div>
                            <div className="mdl-card__supporting-text">
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--12-col">
                                        <p>{about}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mdl-card__actions mdl-card--border">
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--12-col mdl-typography--text-right">
                                        {fallowButton}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});