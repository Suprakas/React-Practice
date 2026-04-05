import React from 'react'

const Child1 = ({onNameChange}) => {
  return (
    <div>
        <h3>I am Child 1</h3>
        <input
            type="text"
            placeholder="Type Something"
            onChange={(e) => onNameChange(e.target.value)}
        />
    </div>
  )
}

export default Child1