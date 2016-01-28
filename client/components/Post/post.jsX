Post = React.createClass({
    propTypes: {
        data: React.PropTypes.object.isRequired
    },
    render() {
        var message = this.props.data.message;

        return(
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--12-col">
                    <div className="mdl-card mdl-shadow--2dp card">
                        <div className="mdl-card__title mdl-card--expand">
                            <h2 className="mdl-card__title-text mdl-typography--text-uppercase">Zeu Cxb</h2>
                        </div>
                        <div className="mdl-card__supporting-text">
                            {message}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});