Home = React.createClass({
    componentDidMount() {
        document.title = 'CSC - Home'
    },
    render() {
        return(
            <div>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col">
                        <Card title="CSC" action="log">
                            Wellcome to "Coders Social Community". The community to Learn, Teach and Growup.
                        </Card>
                    </div>
                </div>

                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--6-col">
                        <Card title="ABOUT" action="info">
                            What's that and why "LOG ON"?
                        </Card>
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">
                        <Card title="Dev" action="info">
                            How can i help the project?
                        </Card>
                    </div>
                </div>

                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col">
                        <Card title="Make today the best that you can!" style="messageCard"></Card>
                    </div>
                </div>
            </div>
        );
    }
});