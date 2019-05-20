import React from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '../data/test/actions';

function Counter (props) {

  const increment = () => {
    const { dispatch } = props
    dispatch(incrementCount())
  }

  const decrement = () => {
    const { dispatch } = props
    dispatch(decrementCount())
  }

  const reset = () => {
    const { dispatch } = props
    dispatch(resetCount())
  }

  
  const { count } = props
  console.log(props);
  return (
    <div>
       
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
 
}

function mapStateToProps (state) {
  const { count } = state
  return { count }
}

export default connect(mapStateToProps)(Counter)
