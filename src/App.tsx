import { useState } from 'react';
import './App.css';
import { Button } from './Button';
import { TextArea } from './TextArea';
import { useGraphCharts } from './useGraphCharts';
import { parseGraph } from './utils';

function App() {
  const [inputText, setInputText] = useState('');
  const [echartsContainerRef, { setOption, getOption }] = useGraphCharts();

  return (
    <div className="flex flex-row gap-4 h-full divide-x-2">
      <div ref={echartsContainerRef} className="h-full w-2/3" />
      <div className="flex flex-col gap-2 h-full w-1/3 max-h-full">
        <TextArea
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <div className="flex flex-row gap-2 font-mono justify-end">
          <Button
            onClick={() => {
              const { categories, data, links } = parseGraph(inputText);
              setOption({
                legend: [{ data: categories.map((category) => category.name) }],
                series: [
                  {
                    data,
                    links,
                    categories,
                  },
                ],
              });
            }}
          >
            Generate
          </Button>
          <Button
            onClick={() => {
              console.log('options', getOption());
            }}
          >
            Get Options
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
