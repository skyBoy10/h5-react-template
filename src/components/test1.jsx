import React from 'react';

const Temp = props => {
    const { render } = props;

    return (
        <div>
            <div>我是原组件内容</div>
            <div>{render('render')}</div>
        </div>
    );
}

export default Temp;