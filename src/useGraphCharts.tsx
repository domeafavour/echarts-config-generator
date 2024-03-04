import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

export function useGraphCharts() {
  const echartsContainerRef = useRef<HTMLDivElement | null>(null);
  const echartsRef = useRef<echarts.ECharts | null>(null);
  useEffect(() => {
    const myChart = echarts.init(echartsContainerRef.current!);
    echartsRef.current = myChart;
    myChart.setOption({
      tooltip: {},
      legend: [{ data: [] }],
      series: [
        {
          name: '',
          type: 'graph',
          layout: 'none',
          data: [],
          links: [],
          categories: [],
          roam: true,
          label: {
            show: true,
            position: 'right',
            formatter: '{b}',
          },
          labelLayout: {
            hideOverlap: true,
          },
          scaleLimit: {
            min: 0.4,
            max: 2,
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3,
          },
        },
      ],
    });
  }, []);
  const setOption: echarts.ECharts['setOption'] = (option) => {
    echartsRef.current?.setOption(option);
  };
  const getOption: echarts.ECharts['getOption'] = () =>
    echartsRef.current!.getOption();

  return [echartsContainerRef, { setOption, getOption }] as const;
}
