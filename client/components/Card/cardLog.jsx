CardLog = React.createClass({
    render() {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col mdl-typography--text-left">
                    <a href={FlowRouter.path('/logon')} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                        Log On
                    </a>
                </div>

                <div className="mdl-cell mdl-cell--6-col mdl-typography--text-right">
                    <a href={FlowRouter.path('/login')} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                        Log In
                    </a>
                </div>
            </div>
        );
    }
});