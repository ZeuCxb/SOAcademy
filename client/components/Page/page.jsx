Page = React.createClass({
    render() {
        return (
            <div className="demo-layout-waterfall mdl-layout mdl-js-layout">
                <Header title="SOAcademy" links={LINKS} />

                <Drawer title="SOAcademy" links={LINKS}/>

                <main className="mdl-layout__content">
                    <div className="page-content">
                        {this.props.children}
                    </div>
                    <Footer title="SOAcademy" links={FOOTER_LINKS} />
                </main>
            </div>
        );
    }
});