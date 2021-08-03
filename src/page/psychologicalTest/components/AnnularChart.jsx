import React, { useState, useMemo } from 'react';

import './AnnularChart.less';

const prefix = 'TK-AnnularChart-20200923';
let donePer = 0;
const dpr = window.devicePixelRatio;

const AnnularChart = (props) => {
  const { options, percent, myScore, averageScore } = props;
  const [currentCanvas, setCurrentCanvas] = useState();

  const circle = useMemo(() => {
    const { width, height, lineW, beginColor, endColor } = options || {};
    let max = width || height;

    if (max < width) {
      max = width;
    }

    if (max < height) {
      max = height;
    }

    return {
      edgeLen: Math.floor(max / 2 * dpr),
      lineW: lineW * dpr,
      percent,
      beginColor,
      endColor
    }
  }, [options]);

  /**
   * 绘制进度
   */
  const drawMove = (ctx) => {
    let isOver = false;
    if (donePer >= circle.percent) {
      donePer = circle.percent;
      isOver = true;
    } else {
      donePer++;
    }

    ctx.beginPath();
    const beginPoint = ctx.createLinearGradient(0, circle.yCircle, circle.xCircle * 3 / 2, circle.yCircle / 2);
    beginPoint.addColorStop(0, circle.beginColor); //开始颜色
		beginPoint.addColorStop(1, circle.endColor); //结束颜色
    ctx.strokeStyle = beginPoint;
    ctx.lineWidth = circle.lineW;
    ctx.arc(circle.xCircle, circle.yCircle, circle.radius, Math.PI * 0.5, Math.PI * (donePer * 2 / 100 + 0.5), false);
    ctx.stroke();

    if (isOver) {
      return;
    }

    requestAnimationFrame(() => { drawMove(ctx) })
  }

  /**
   * 初始化画布
   */
  useMemo(() => {
    if (!circle.edgeLen || !currentCanvas) {
      return;
    }

    const edgeLen = circle.edgeLen;
    currentCanvas.style.width = `${edgeLen}px`;
    currentCanvas.style.height = `${edgeLen}px`;
    currentCanvas.width = Math.floor(edgeLen * dpr);
    currentCanvas.height = Math.floor(edgeLen * dpr);
    circle.xCircle = currentCanvas.width / 2;
    circle.yCircle = currentCanvas.height / 2;
    circle.radius = currentCanvas.height / 2;
    currentCanvas.style.borderRadius = '50%';

    if (currentCanvas.getContext) {
      const outCtx = currentCanvas.getContext('2d');
      outCtx.beginPath();
      outCtx.strokeStyle = "#F0F7FF";
      outCtx.lineWidth = circle.lineW;
      outCtx.arc(circle.xCircle, circle.yCircle, circle.radius, Math.PI * 0, Math.PI * 2, false);
      outCtx.stroke();
      drawMove(outCtx);
    }
  }, [!!currentCanvas, percent]);

  return (
    <div className={`${prefix}-container`}>
      <div className={`${prefix}-show`}>
        <div className={`${prefix}-my`}><span>{myScore}</span><span>分</span></div>
        <div className={`${prefix}-average`}>平均值:{averageScore}分</div>
      </div>
      <canvas ref={ref => { setCurrentCanvas(ref); }} />
    </div>
  );
}

export default AnnularChart;