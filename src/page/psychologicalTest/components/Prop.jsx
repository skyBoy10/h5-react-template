import React, { Fragment, useCallback } from 'react';
import RadarChart from './RadarChart';
import AnnularChart from './AnnularChart';

import './Prop.less';

const prefix = 'TK-Prop-20200923';
const PropComponent = (props) => {
  const { item, isOk } = props;
  const { label } = item || {};

  /**
   * 格式化属性特征
   * @param {*} list 
   */
  const formatProps = (list, item) => {
    if (!list && list.length === 0) {
      return <div className={`${prefix}-no-data`}><span>暂无数据</span></div>;
    }

    const len = list.length;
    return (
      <div className={`${prefix}-prop`}>
        {
          list.map((prop, index) => {
            const per = (prop.score * 100 / prop.max);
            return (
              <div
                key={prop.label}
                className={`${prefix}-item ${index + 1 < len ? `${prefix}-split` : ''}`}>
                <div>
                  <AnnularChart
                    options={{
                      width: 130,
                      beginColor: '#3FE9F6',
                      endColor: '#65FF9F',
                      lineW: 20,
                    }}
                    percent={per}
                    myScore={prop.score}
                    averageScore={prop.averageScore}
                  />
                </div>
                <div className={`${prefix}-tip`}>取值{prop.min}-{prop.max}分，分值越大{prop.label}越严重</div>
                <div>
                  <div className={`${prefix}-label`}>
                    <div><span>{prop.label}：</span><span>{prop.result}</span></div>
                  </div>
                  <div className={`${prefix}-des`}>{prop.des}</div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }

  /**
   * 格式化素养特征
   * @param {*} list 
   */
  const formatAttainment = (list, item) => {
    if (!list && list.length === 0) {
      return <div className={`${prefix}-no-data`}><span>暂无数据</span></div>;
    }

    const len = list.length;
    return (
      <div className={`${prefix}-attainment`}>
        <div className={`${prefix}-chart`}>
          <RadarChart
            isOk={isOk}
            data={item}
          />
        </div>
        <div className={`${prefix}-list`}>
          {
            list.map((att, index) => {
              return (
                <div
                  key={att.result}
                  className={`${len > index + 1 ? `${prefix}-bottom-18` : ''}`}>
                  <span className={`${prefix}-label`}>【{att.result}】</span>
                  <span className={`${prefix}-des`}>{att.des}</span>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

  /**
   * 格式化素养特征
   * @param {*} list 
   */
  const formatBehavior = (item) => {
    const { list, typeName, result, des } = item;
    let content;

    if (list && list.length > 0) {
      const len = list.length;
      content = (
        <Fragment>
          <div className={`${prefix}-types ${prefix}-bottom`}>
            {
              list.map((be, index) => {
                return (
                  <div
                    key={be.type}
                  >
                  {be.type}
                  </div>
                );
              })
            }
          </div>
          <div className={`${prefix}-list`}>
            {
              list.map((beh, index) => {
                return (
                  <div
                    key={beh.type}
                    className={`${prefix}-be-des ${index + 1 < len ? `${prefix}-bottom-18` : ''}`}
                  >
                    {beh.des}
                  </div>
                );
              })
            }
          </div>
        </Fragment>
      );
    } else {
      content = (
        <Fragment>
          <div className={`${prefix}-img`}><div></div></div>
          <div>
            <div className={`${prefix}-label`}>
              <div>
                {typeName && <span>{typeName}：</span>}
                <span>{result}</span>
              </div>
            </div>
            <div>{des}</div>
          </div>
        </Fragment>
      );
    }

    return (
      <div className={`${prefix}-behavior`}>
        {content}
      </div>
    );
  }

  /**
   * 渲染item
   */
  const renderItem = useCallback(() => {
    const { type, list = [] } = item;

    if (type === 1) { // 属性特征
      const propItem = formatProps(list, item);

      return propItem;
    }

    if (type === 2) { // 素养特征
      const attainmentItem = formatAttainment(list, item);

      return attainmentItem;
    }

 
    return formatBehavior(item);
  }, [item, isOk]);

  return (
    <div className={`${prefix}-container`}>
      <div className={`${prefix}-title`}>
        <div className={`${prefix}-triangle-left`} />
        <div className={`${prefix}-triangle-right`} />
        <div className={`${prefix}-title-txt`}>{label}</div>
      </div>
      {renderItem()}
    </div>
  );
}

export default PropComponent;