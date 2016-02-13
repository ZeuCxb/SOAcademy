Login = React.createClass({
    mixins: [Validation],
    componentDidMount() {
        document.title = 'SOA - Log In'
    },
    submitForm(event) {
        event.preventDefault();

        // TextFields
        var email = this.refs.email;
        var pass = this.refs.pass;

        // Validation
        if(this.isEmpty(email) && this.isEmpty(pass)) {
            Meteor.loginWithPassword(email.state.value, pass.state.value, (error) => {
                if(error) {
                    pass.setState({value: ''});

                    this.setError(pass);
                } else {
                    FlowRouter.go('/');
                }
            });
        } else {
            return false;
        }
    },
    render() {
        return(
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--1-col"></div>
                <form onSubmit={this.submitForm} className="mdl-cell--10-col">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--6-col">
                            <TextField type="email" id="email" ref="email" placeholder="Email" />
                        </div>

                        <div className="mdl-cell mdl-cell--6-col">
                            <TextField type="password" id="pass" ref="pass" placeholder="Password" />
                        </div>
                    </div>

                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--12-col mdl-typography--text-right">
                            <Submit value="Log In"/>
                        </div>
                    </div>
                </form>
                <div className="mdl-cell mdl-cell--1-col"></div>
            </div>
        );
    }
});