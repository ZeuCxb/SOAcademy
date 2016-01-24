Page = React.createClass({
    render() {
        return (
            <div className="demo-layout-waterfall mdl-layout mdl-js-layout">
                <Header title="CSC" links={LINKS} />

                <Drawer title="CSC" links={LINKS}/>

                <main className="mdl-layout__content">
                    <div className="page-content">
                        {this.props.children}
                    </div>
                    <Footer title="CSC" links={FOOTER_LINKS} />
                </main>
            </div>
        );
    }
});