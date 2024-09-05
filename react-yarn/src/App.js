import React, { useCallback, useMemo, useState, Suspense } from 'react';
import './App.css';

const Child = React.lazy(() => import('./Child'));

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const result = useMemo(() => {
    let i = 0;
    console.time('result');
    while (i < 1000000000) {
      i++;
    }
    console.timeEnd('result');
    return 90;
  }, []);

  return (
    <div className='text-center'>
      <h1 className='text-gray-900 text-2xl'>
        Performance optimization In React JS <br /> {count} result is {result}
      </h1>

      {/* Use Suspense to show a fallback while the Child component is being loaded */}
      <Suspense fallback={<div>Loading Child Component...</div>}>
        <Child increment={increment} />
      </Suspense>
    </div>
  );
}

export default App;
