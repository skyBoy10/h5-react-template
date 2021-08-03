import { post } from '../../utils/request';
const defaultPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAn1BMVEUAAAD////37+n6/v74///w+Py/mIfw+f+6lHzy9v/w+P23jXPw+P6yhGjv9/2yhWnw9/7r8/ns9/2reFrt9v3t9v03Hzf/5dqnclL839PSvLfs7/P///7wp5Ly+Pz3y8Hu4dv4ua/XzcpJMkf16eU9JTy2jHN2Z3cuMUG4t8J/dYVXQVSYj5a5rrH/qKhlUWL1eHfIp5OzpaTFxs+bk52P7v/tAAAAFXRSTlMABRMYJFJXaGt0jo62tsvS2/Pz+/6wrztlAAACdklEQVR42oVWiZaqMAzFbRzRQZCyVGSR3f2N+v/f9lpIS6HFueeotdzbJE2boGlDzBb6xrQQssyNvphpf2C6NBByOBAyltMP9Jm+E9ig2eljZiYrmd5KVhMVf24wenC6nqvqfD0FTGLMZf7CgqevqnABRfWCSWsx5C9heatye6hgHbRU81+ZO0D2UikWwD8VroTiBArBqznYTRV8okjBWx75xIDdyVwlMtgtg+3uChx6uyN4g1MryO/us4HOxK7Nuc4idkfB4tab8wYGnPO44AyU3VRIQfQYFzwiIRmwRU50kfaTjy4gcAwSMhoTFJUsQDOeZNml6ia5RNOt83N/dou9iBjDIONBO46ubfj45mbYUyFzb5y00Uw+DrJLI3g+GfP2phP4wRJHYGpWdxXDkD5P6zpt+Uld36ggDLura2ndOG8F+7rec8GzFeTdqrLAu16ZS88rlgWdS04cKoPGYewILplCQQmwh4/HuOPGxyOZCgSKKWwrQeLh+/3e2TnSP1isVhshcY3Awz236L9EZOjd0QCfWl5MwMaiR+RozNDAREP6RwCCngFy+PjxbifYsjTadtRb0BAuUN8pHkTQW28pXlGVos9vrygvAmyVhEtwMnik98pMN5/HmCBOgsEDKDO8kHUKkmGScWl6NSiVDFGUU4fyKOrP81LJi3F7vNLD4UAUOflJxSRYc7nc0wpulxGheh75iko7FZOsaCiE7/tlQEwQA0Hp+/7e+diCEsL3ffv316afZpwq+dAUEV1zgBIpm2LbdlNfgb267TaNvVQJypHGTnO+tmW+vf70hjL93vY09vZ7+ucLzdf6Z2sTbH/WXzL7P9JCpSbkw2SWAAAAAElFTkSuQmCC';

/**
 * 获取基本信息
 */
export const getBasicInfo = (param = {}) => {
  try {
    return new Promise((resolve, reject) => {
      post('/test/getBaseInfo', param).then(res => {
        const { data, code } = res;

        if (code !== 0) {
          reject({ code, message: '接口数据异常！' });
          return;
        }

        data.userPic = data.userPic ? data.userPic : defaultPic;
        resolve(data);
      }, err => {
        reject(err);
      });
    })
  } catch (err) {
    console.log(err);
  }
}

/**
 * 格式化数据
 */
const formatData = () => {
  
}

/**
 * 获取属性信息
 */
export const getPropData = (param = {}) => {
  try {
    return new Promise((resolve, reject) => {
      post('/test/getPropData', param).then(res => {
        const { data, code } = res;

        if (code !== 0) {
          reject({ code, message: '接口数据异常！' });
          return;
        }

        resolve(data);
      }, err => {
        reject(err);
      });
    })
  } catch (err) {
    console.log(err);
  }
}