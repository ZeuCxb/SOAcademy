Post = React.createClass({
    propTypes: {
        data: React.PropTypes.object.isRequired
    },
    getSenderName(_id) {
        return MeDB.getMeName(_id);
    },
    render() {
        var message = this.props.data.message;
        var title = this.props.data.title;
        var sender = this.props.data.sender;

        var link = FlowRouter.path('/me/' + sender);

        var senderName = this.getSenderName(sender);

        var author = <a href={link}>
            {senderName}
        </a>;

        return(
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--12-col">
                    <div className="mdl-card mdl-shadow--2dp card">
                        <div className="mdl-card__title mdl-card--expand">
                            <h2 className="mdl-card__title-text mdl-typography--text-uppercase">{title}</h2>
                        </div>
                        <div className="mdl-card__supporting-text">
                            "{message}"
                        </div>
                        <div className="mdl-card__actions mdl-card--border">
                            <div className="mdl-grid">
                                <div className="mdl-cell mdl-cell--12-col mdl-typography--text-right">
                                    by {author}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});