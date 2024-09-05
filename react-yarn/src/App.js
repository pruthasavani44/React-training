import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Child from './Child';

function App() {

  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [setCount]);

  const result = useMemo(() => {
    let i = 0;
    console.time("result")
    while (i < 1000000000) {
      i++;
    }
    console.timeEnd("result")
    return 90;
  }, [])

  return (
    <>
      <div className='text-center'>
        <h1 className='text-gray-900 text-2xl'>Performance optimization In React JS <br /> {count} result is {result} </h1>
        <Child increment={increment} />
        {/* <button className='border p-1' onClick={increment} >Increase Number</button> */}
      </div>
    </>
  );
}

export default App;
