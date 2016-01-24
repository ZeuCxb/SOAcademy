Card = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        children: React.PropTypes.string,
        style: React.PropTypes.string,
        action: React.PropTypes.string
    },
    render() {
        var title = this.props.title;
        var message = this.props.children;
        var action = this.props.action;
        var style = this.props.style;

        var actionClass = 'mdl-card__actions mdl-card--border';

        switch(action) {
            case 'log':
                action = <CardLog />;
                break;
            case 'info':
                action = <CardInfo />;
                break;
            default:
                action = false;
        }

        if(action) {
            var actionTemplate = <div className={actionClass}>
                {action}
            </div>;
        }

        if(style) {
            style += ' mdl-card mdl-shadow--2dp card';
        } else {
            style = ' mdl-card mdl-shadow--2dp card';
        }

        return(
            <div className={style}>
                <div className="mdl-card__title mdl-card--expand">
                    <h2 className="mdl-card__title-text mdl-typography--text-uppercase">{title}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    {message}
                </div>
                {actionTemplate}
            </div>
        );
    }
});