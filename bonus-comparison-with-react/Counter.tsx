import { useState, useEffect } from 'react';
import fetchCount from '../fetchCount';
import ControlBar from '../ControlBar';

interface Props {
  limit: number;
  alertMessageOnLimit?: string;
}

function Counter({ limit, alertMessageOnLimit = 'can not go any higher' }: Props) {
  const [count, useCount] = useState<number | null>(null);

  useEffect(() => {
    fetchCount((initialCount) => {
      setCount(initialCount);
    });
  }, []);

  function addCount(num: number) {
    if (count !== null) {
      if (count >= limit) {
        alert(alertMessageOnLimit);
      } else {
        setCount(num);
      }
    }
  }

  return (
    <div>
      <p>{count}</p>
      <ControlBar addCount={addCount} resetCount={() => setCount(0)} />
    </div>
  );
}

export default Counter;
