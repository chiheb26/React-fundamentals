import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={() => props.clickHandler('Child')}>
        click</button>
    </div>
  )
}

export default Child