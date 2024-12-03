import { useEffect, useState } from "react";
const pageTitle = document.title;

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    count && (document.title = `${pageTitle}--${count}`);
  })

  return (
    <button onClick={() => setCount(count + 1)}
    >Click Me { count === 0 ? ``:`${count} times` }</button>
  )
}

export default Counter;