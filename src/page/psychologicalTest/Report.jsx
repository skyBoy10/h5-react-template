import React, { Fragment, useEffect, useState } from 'react';
import Tab from './components/Tab';
import { getBasicInfo, getPropData } from './service';
import PropItem from './components/Prop';
import Skeleton from './components/Skeleton';
import { loadJsAsync, getTerminalType, scrollAnimation } from '../../utils/tool';

import './Report.less';

const prefix = 'TK-Report-20200923';
const arrs = [];
const clientH = document.body.clientHeight;
let tabH = 0;
let tabRef;
let timer;
const terminalType = getTerminalType();
const antVF2 = 'https://statics-lib.zmlearn.com/antv-f2/3.4.2/f2.min.js';
const tabs = [
  {
    type: 'prop',
    typeVal: 1,
    name: '属性特征'
  },
  {
    type: 'attainment',
    typeVal: 2,
    name: '素养特征'
  },
  {
    type: 'behavior',
    typeVal: 3,
    name: '行为特征'
  }
];
const Report = () => {
  const [isTop, setIsTop] = useState(false);
  const [conRef, setConRef] = useState();
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [list, setList] = useState([]);
  const [basicInfo, setBasicInfo] = useState({});
  const [isOk, setIsOk] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * 加载剩余数据
   */
  const getStoreData = (arrs) => {
    getPropData({ types: [2, 3] }).then(res => {
      const newList = arrs.slice(0, arrs.length - 2);
      setList(newList.concat(res));
      loadJsAsync('antv-f2', antVF2).then(() => {
        setIsOk(true);
      }, () => {
        console.log('fail')
      });
    });
  }

  /**
   * 初始化数据
   */
  const initData = () => {
    Promise.all([
      getBasicInfo(),
      getPropData({ types: [1] })
    ]).then(res => {
      setBasicInfo(res[0]);
      const temp = [...res[1],
      { type: 2, label: '学习能力', isSeat: true },
      { type: 3, label: '学习风格', isSeat: true }];
      setList(temp);
      setIsLoading(false);
      setTimeout(() => {
        getStoreData(temp);
      }, 10000);
    }, err => {
      setIsLoading(false);
      console.log(err, 'exception')
    });
  }

  useEffect(() => {
    initData();
    return () => { if(conRef) conRef.removeEventListener('scroll', handleScroll) }
  }, []);

  useEffect(() => {
    if (conRef) {
      conRef.addEventListener('scroll', handleScroll);
    }
  }, [!!conRef]);

  /**
   * 处理激活tab
   */
  const handleActiveTab = () => {
    if (arrs.length === 0) {
      return;
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      const { scrollTop } = conRef;
      const temp = [...arrs];
      const splitH = scrollTop + Math.ceil(clientH / 2);
      const reverArrs = temp.reverse();
      const index = reverArrs.findIndex(item => item.top < splitH);
      const tarTabIndex = index === 0 ? arrs.length - 1 : (index < 0 ? 0 : arrs.length - index - 1);
      setCurrentTab({ ...tabs[tarTabIndex] });
    }, 50);
  }

  /**
   * 处理滚动
   */
  const handleScroll = () => {
    if (tabRef) {
      const location = tabRef.getBoundingClientRect();
      setIsTop(location.top <= 0);
    } else {
      setIsTop(false);
    }

    handleActiveTab();
  }

  /**
   * 记录位置信息
   */
  const recordLocations = (top, item) => {
    const tarIndex = arrs.findIndex(loca => loca.type === item.type);
    if (tarIndex > -1) {
      if (arrs[tarIndex].key === item.label) {
        arrs[tarIndex].top = top;
      }
      return;
    }

    arrs.push({
      type: item.type,
      top: top,
      key: item.label
    });
  }

  /**
   * 切换tab
   */
  const switchTab = (tab) => {
    if (!tabH) {
      tabH = tabRef.clientHeight;
    }
    const index = arrs.findIndex(item => item.type === tab.typeVal);
    if (index > -1) {
      if (terminalType === 'ios') {
        scrollAnimation(conRef, arrs[index].top - tabH, clientH / 2);
      } else {
        conRef.scrollTo({
          top: arrs[index].top - tabH,
          behavior: 'smooth'
        });
      }
    }

    setCurrentTab(tab);
  }

  /**
   * 处理占位数据
   */
  const handleSeat = (item) => {
    const { isSeat, type } = item;

    if (isSeat) {
      return (<div>
        <Skeleton type={type} />
      </div>);
    }

    return (
      <PropItem
        isOk={isOk}
        item={item}
      />
    );
  }

  /**
   * 渲染内容
   */
  const renderBody = () => {
    if (!list || list.length === 0) {
      return null;
    }

    const len = list.length;
    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              <div
                key={item.label}
                className={`${prefix}-item ${len > index + 1 ? `${prefix}-bottom` : ''}`}
                ref={(ref) => {
                  if (ref) {
                    const offsetTop = ref.offsetTop;
                    recordLocations(offsetTop, item);
                  }
                }}
              >
                {handleSeat(item)}
              </div>
            )
          })
        }
      </Fragment>
    );
  };

  if (!isLoading) {
    return (
      <Skeleton />
    );
  }

  return (
    <div
      className={`${prefix}-container`}
      ref={(ref) => { setConRef(ref) }}
    >
      <div className={`${prefix}-first`}>
        <div className={`${prefix}-info`}>
          <div className={`${prefix}-brief`}>
            <div className={`${prefix}-img`}><img src={basicInfo.userPic} alt='' /></div>
            <div>{basicInfo.name}</div>
            <div>{basicInfo.gradeName}</div>
          </div>
          <div className={`${prefix}-eval-result`}>学习心理状态较好</div>
          <div className={`${prefix}-evaluation`}>
            {basicInfo.comprehensive}
          </div>
        </div>
      </div>
      <div
        className={`${prefix}-tabs`}
        ref={(ref) => { tabRef = ref }}
      >
        <div className={`${isTop ? `${prefix}-fixed` : ''}`}>
          <Tab
            tabs={tabs}
            activeTab={currentTab}
            switchTab={switchTab}
          />
        </div>
      </div>
      <div className={`${prefix}-body`}>
        {renderBody()}
      </div>
      <div className={`${prefix}-foot`}>本问卷由清华大学提供内容和学术支持</div>
    </div>
  );
}

export default Report;