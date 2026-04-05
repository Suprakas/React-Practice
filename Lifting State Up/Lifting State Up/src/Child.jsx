//Stage -1 : Child just triggered function

// function Child({onButtonClick}){

//     return (
//         <button onClick={onButtonClick}>
//             Click Me !!
//         </button>
//     )
// }

// export default Child;

//stage-2 : Child sends actual data up

import React from 'react'

const Child = ({onNameChange}) => {
  return (
    <div>
        <h3>I am Child</h3>
        <input
            type="text"
            placeholder= "Type your name"
            onChange={(e) => onNameChange(e.target.value)}
        />
    </div>
  )
}

export default Child