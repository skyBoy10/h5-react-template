import React from 'react';
import Test1 from './test1';

const Test2 = props => {
    return (
        <div>
            <Test1 render={(name) => 
                <div>我是render props，{name}</div>
            } />
        </div>
    );
}

export default Test2;