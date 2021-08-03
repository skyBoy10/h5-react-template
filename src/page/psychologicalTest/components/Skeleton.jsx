import React, { Fragment } from 'react';

import './Skeleton.less';

const prefix = 'TK-Skeleton-20200923';
const Skeleton = (props) => {
  const { type } = props;
  const withCon = (
    <Fragment>
      <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
      <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
      <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
      <div className={`${prefix}-paragraph ${prefix}-mb-4 ${prefix}-w-half ${prefix}-ani`}></div>
      <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
      <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
      <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
      <div className={`${prefix}-paragraph ${prefix}-mb-4 ${prefix}-w-half ${prefix}-ani`}></div>
      <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
      <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
      <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-half ${prefix}-ani`}></div>
      <div className={`${prefix}-paragraph ${prefix}-w-full ${prefix}-ani`}></div>
    </Fragment>
  );

  if (type === 2) {
    return (
      <div className={`${prefix}-container ${prefix}-radius`}>
        <div className={`${prefix}-top ${prefix}-ani`}></div>
        {withCon}
      </div>
    );
  }

  if (type === 3) {
    return (
      <div className={`${prefix}-container ${prefix}-radius`}>
        <div className={`${prefix}-types ${prefix}-mb-4`}>
          <div className={`${prefix}-paragraph ${prefix}-ani`}></div>
          <div className={`${prefix}-paragraph ${prefix}-ani`}></div>
          <div className={`${prefix}-paragraph ${prefix}-ani`}></div>
          <div className={`${prefix}-paragraph ${prefix}-ani`}></div>
        </div>
        {withCon}
      </div>
    )
  }

  return (
    <div className={`${prefix}-container`}>
      <div className={`${prefix}-top ${prefix}-ani`}></div>
      <div className={`${prefix}-content`}>
        <div className={`${prefix}-user ${prefix}-mb-2`}>
          <div className={`${prefix}-img ${prefix}-ani`}></div>
          <div className={`${prefix}-paragraph ${prefix}-w-5 ${prefix}-ani`}></div>
          <div className={`${prefix}-paragraph ${prefix}-w-5 ${prefix}-ani`}></div>
        </div>
        <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-half ${prefix}-ani`}></div>
        <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
        <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
        <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
        <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
        <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
        <div className={`${prefix}-paragraph ${prefix}-mb-2 ${prefix}-w-full ${prefix}-ani`}></div>
        <div className={`${prefix}-paragraph ${prefix}-w-full ${prefix}-ani`}></div>
      </div>
      <div className={`${prefix}-tabs`}>
        <div className={`${prefix}-paragraph ${prefix}-ani`}></div>
        <div className={`${prefix}-paragraph ${prefix}-ani`}></div>
        <div className={`${prefix}-paragraph ${prefix}-ani`}></div>
      </div>
    </div>
  );
}

export default Skeleton;