import React from 'react';

import './Tab.less';

const prefix = 'TK-Tab-20200923';
const Tab = (props) => {
  const { tabs, activeTab = {}, switchTab } = props;

  /**
   * 处理tab切换
   */
  const handleSwitchTab = (tab) => {
    if (tab.type === activeTab.type) {
      return;
    }

    switchTab(tab);
  }

  return (
    <div className={`${prefix}-container`}>
      {
        tabs.map(item => {
          return (
            <div
              key={item.type}
              className={`${prefix}-item ${activeTab.type === item.type ? `${prefix}-active` : ''}`}
              onClick={() => { handleSwitchTab(item) }}
            >
              {item.name}
            </div>
          )
        })
      }
    </div>
  );
}

export default Tab;