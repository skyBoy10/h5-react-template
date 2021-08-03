/*
 * 获取终端类型
 */
export function getTerminalType() {
    const userAgentInfo = navigator.userAgent;
    if (/(iPhone|iPad|iPod|iOS)/i.test(userAgentInfo)) {
      return 'ios';
    }

    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgentInfo)) {
      return 'mobile';
    }
  
    if (/iPad/i.test(userAgentInfo)) {
      return 'ipad';
    }
  
    return 'pc';
}

/**
 * 异步加载第三方脚本
 * @param {string} id，指定加载脚本的script的id；
 * @param {string} url 加载脚本的地址
 */
export const loadJsAsync = (id, url) => {
  const scriptDom = document.querySelector(`#${id}`);

  return new Promise((resolve, reject) => {
      if (scriptDom) { // 已加载
          resolve(true);
          return;
      }

      const script = document.createElement('script');
      script.id = id;
      script.type = 'text/javascript';
      if (script.readyState) {
          script.onreadystatechange = () => {  // readyState变化触发
              if (script.readyState === 'complete' || script.readyState === 'loaded') { // 兼容
                  resolve(true);
              } else {
                  reject(false);
              }
          }
      } else {
          script.onerror = () => {
              reject(false);
          };

          script.onload = () => {
              resolve(true);
          };
      }
      script.src = url;

      document.head.appendChild(script);
  });
};

/**
 * 滚动动画
 * @param {*} currentDom
 * @param {*} targetTop 
 * @param {*} step 
 */
export const scrollAnimation = (currentDom, targetTop, step) => {
    if (!currentDom) {
        return;
    }

    let beginTop = currentDom.scrollTop;
    const flag = beginTop - targetTop > 0 ? -1 : 1;

    /**
     * 开始滚动
     */
    const startScroll = () => {
        const afterUpdate = beginTop + step * flag;
        if (beginTop <= 0 || (beginTop >= targetTop && afterUpdate < targetTop)
        || (beginTop < targetTop && afterUpdate >= targetTop)) {
            currentDom.scrollTo(0, targetTop);
            return;
        }

        beginTop = afterUpdate;
        currentDom.scrollTo(0, beginTop);
        requestAnimationFrame(startScroll);
    }

    startScroll();
}