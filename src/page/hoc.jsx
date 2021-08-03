import React, { Component } from 'react';

const withHoc = (WrapComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            console.log(this.props);
            return (
                <WrapComponent {...this.props} />
            );
        }
    }
};

export default withHoc;