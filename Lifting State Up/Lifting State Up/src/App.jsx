// Stage-1 : Child Just Triggered a Function 

// import {useState} from "react"
// import Child from "./Child"

// import './App.css'

// function App() {
// const [message, setMessage] = useState("Nothing Clicked Yet")

// function handleClick(){
//   setMessage("Button has clicked !!")
// }
//   return (
//     <div>
//       <p>{message}</p>
//       <Child onButtonClick={handleClick}></Child>
//     </div>
//   )
// }

// export default App


//Stage 2 : Child sends actual data up
import Child from "./Child"
import { useState } from "react";
import './App.css'

function App() {

  const [name, setName] = useState("Ram")

  function handleNameChange(value){
    setName(value);
  }
  return (
    <div>
      <h2> I am App</h2>
      <p>Name typed in child: {name}</p>
      <Child onNameChange={handleNameChange} />
    </div>
  );
}

export default App;