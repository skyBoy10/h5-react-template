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
      <div className={styles.container}>
        <div className={styles.col}>第一列</div>
        <div className={styles.col}>第二列</div>
        <div className={styles.col}>第三列</div>
      </div>
    );
  }
}

index.propTypes = {
};

export default index;
