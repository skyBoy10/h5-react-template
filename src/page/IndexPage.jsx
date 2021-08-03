import React, { Component } from 'react';
import { connect } from 'dva';
import TestCom from '../components/test';
import TestRend from '../components/test2';
import styles from './IndexPage.less';

@connect(({ example }) => ({ example }))
class index extends Component {
  componentDidMount() {
    
  }

  getDerivedStateFromProps () {
            
  }

  getSnapshotBeforeUpdate() {

  }

  render() {
    return (
      <div className={styles.container}>
        <div className={`${styles.col} ${styles['first-col']}`}>
          <div className={styles.first}>第一列</div>
        </div>
        <div className={styles.col}>
          <TestRend />
        </div>
        <div className={styles.col}>
          <TestCom name={'gavin'} />
        </div>
      </div>
    );
  }
}

index.propTypes = {
};

export default index;
