import React, { Component } from 'react';
import withHoc from '../page/hoc';

class TestCom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, hocName } = this.props;
        return (
            <div>
                <div>hello {name}，welcome in, {hocName}</div>
            </div>
        );
    }
}

export default withHoc(TestCom);