import React from 'react'
import ReactDOM from 'react-dom'

function Counter() {
  const [count, setCount] = React.useState(0)
  function handleClick() {
    setCount(c => c + 1)
  }
  return (
    <div>
      <div>The count is: {count}</div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

const ui = <Counter />

ReactDOM.render(ui, document.getElementById('root'))
