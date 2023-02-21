import React,{useEffect, useState} from 'react'

const CountDown = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    // <div>{count === 0 ? <p>Timer finished</p> : <p>Timer: {count}</p>}</div>
    <span>{count}</span>
  );
}

export default CountDown