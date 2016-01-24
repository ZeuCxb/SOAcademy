Validation = {
    isEmpty(element) {
        value = element.state.value.trim();

        if(value === '') {
            this.setError(element);

            return false;
        }

        return true;
    },
    setError(element) {
        element.setState({error: true});
    }
};