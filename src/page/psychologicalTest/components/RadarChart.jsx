import React, { useMemo, useState } from 'react';
import './RadarChart.less';

const prefix = 'TK-RadarChart-20200923';
const RadarChart = (props) => {
  const { data, isOk } = props;
  const [canvasRef, setCanvasRef] = useState();

  /**
   * 图表数据源
   */
  const chartData = useMemo(() => {
    if (!data) {
      return [];
    }

    const { scores } = data;
    const arrs = [];
    scores.forEach((item) => {
      arrs.push({
        item: item.type,
        user: '你的分数',
        score: item.myScore
      });

      arrs.push({
        item: item.type,
        user: '平均分数',
        score: item.averageScore
      });
    });

    return arrs;
  }, [data]);

  /**
   * 初始化图表
   */
  useMemo(() => {
    const F2 = window.F2;
    if (!isOk || !F2 || !canvasRef) {
      return null;
    }

    const chart = new F2.Chart({
      el: canvasRef,
      pixelRatio: window.devicePixelRatio,
      padding: 'auto',
      height: 260,
      padding: [30, 20, 0, 20]
    });
    chart.legend({
      position: 'left',
      verticalAlign: 'top',
      marker: 'square'
    });
    chart.coord('polar');
    chart.source(chartData, {
      score: {
        min: data.min,
        max: data.max,
      }
    });
    chart.axis('score', {
      label: function label(text, index, total) {
        return {
          top: true
        };
      },
      grid: {
        lineDash: null,
        type: 'line' // 直线网格
      }
    });
    chart.scale('score', {
      type: 'linear',
      tickInterval: 2.4,
      nice: false,
      max: 12,
      min: 0,
    })
    chart.line().position('item*score').color('user', ['#5B8FF9', '#5AD8A6']);
    chart.area().position('item*score').color('user', ['#5B8FF9', '#5AD8A6']);
    chart.point().position('item*score').color('user', ['#5B8FF9', '#5AD8A6'])
      .style({
        stroke: '#fff',
        lineWidth: 1
    });
    chart.render();
  }, [chartData, !!canvasRef, isOk]);

  return (
    <div className={`${prefix}-container`}>
      <canvas className={`${prefix}-canvas`} ref={ref => { setCanvasRef(ref) }} />
    </div>
  );
}

export default RadarChart;