import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

@connect(({ example }) => ({ example }))
class index extends Component {
  componentDidMount() {
    console.log(this.props.example);
  }

  render() {
    return (
      <div className={styles.container}>hello, wolrd</div>
    );
  }
}

index.propTypes = {
};

export default index;
