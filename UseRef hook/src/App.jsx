// Stage 1 — Use 1: Access DOM directly

import { useRef } from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

// function App() {

// const inputRef = useRef(null);

// function handleClick(){
//  inputRef.current.focus()      // focus the input
// // inputRef.current.blur()       // remove focus
// // inputRef.current.value        // get typed value
// // inputRef.current.style.border = "2px solid red"  // change style
// // inputRef.current.click()      // simulate click
// }
//   return (
//     <div>
//       <input ref={inputRef} type='text' placeholder='I will get Focused'></input>
//       <button onClick={handleClick}>Focus Input</button>
//     </div>
//   )
// }

// export default App;


// Stage 2 — Store value without re-render!

// function App() {

//   const [count, setCount] = useState(0);
//   const renderCount = useRef(0);

//   renderCount.current = renderCount.current + 1;
//   return (
//     <div>
//       <h2>Count : {count} </h2>
//       <h2>Render Count: {renderCount.current}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//     </div>
//   )
// }

// export default App;


// Stage 3 — Store Previous Value!
// This is directly asked in interviews!

// function App() {

//   const [name, setName] = useState("")
//   const prevName = useRef("")

//   useEffect(() => {
//     prevName.current = name;
//   }, [name])

//   return (
//     <div>
//       <input
//         type='text'
//         value={name}
//         placeholder='Type your name'
//         onChange={(e) => setName(e.target.value)}
//       />
//       <h2>Current Name : {name} </h2>
//       <h2>Previous Name : {prevName.current} </h2>
//     </div>
//   )
// }

// export default App;

// The ORDER of events matters:

// 1. User types        → name changes
// 2. React renders     → shows NEW current name
// 3. useEffect runs    → updates previousName.current
//                        with NEW name
// 4. BUT no re-render! → screen still shows OLD previous
// 5. Next keystroke    → renders again
//                      → NOW previous shows what was
//                         stored in step 3



// Stage 4 — Store Timer ID
// Scenario — Start and Stop a timer:

function App() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  function handleStart() {
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(timerRef.current);
  }

  function handleReset() {
    clearInterval(timerRef.current);
    setSeconds(0);
  }

  return (
    <div>
      <h2>Seconds: {seconds}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;