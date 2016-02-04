Header = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        links: React.PropTypes.array.isRequired
    },
    render() {
        var title = this.props.title;
        var links = this.props.links;

        return (
            <header className="mdl-layout__header mdl-layout__header--waterfall">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">{title}</span>
                    <div className="mdl-layout-spacer"></div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                      mdl-textfield--floating-label mdl-textfield--align-right">
                        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="waterfall-exp">
                            <i className="material-icons">search</i>
                        </label>
                        <div className="mdl-textfield__expandable-holder">
                            <input className="mdl-textfield__input" type="text" name="sample" id="waterfall-exp" />
                        </div>
                    </div>
                </div>
                <div className="mdl-layout__header-row mdl-layout--large-screen-only">
                    <div className="mdl-layout-spacer"></div>
                    <Nav links={links} />
                </div>
            </header>
        );
    }
});