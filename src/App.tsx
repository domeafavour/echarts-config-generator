import * as echarts from 'echarts';
import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const chartRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const myChart = echarts.init(chartRef.current!);
    myChart.setOption({
      title: {
        text: 'ECharts Getting Started Example',
      },
      tooltip: {},
      xAxis: {
        data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks'],
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }, []);
  return <div ref={chartRef} className="h-full" />;
}

export default App;
