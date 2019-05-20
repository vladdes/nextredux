import { test } from '../initState';
import { actionTypes } from './actiontypes';


export const reducer = (state = test, action) => {
    switch (action.type) {
      case actionTypes.TICK:
        return Object.assign({}, state, {
          lastUpdate: action.ts,
          light: !!action.light
        })
      case actionTypes.INCREMENT:
        return Object.assign({}, state, {
          count: state.count + 1
        })
      case actionTypes.DECREMENT:
        return Object.assign({}, state, {
          count: state.count - 1
        })
      case actionTypes.RESET:
        return Object.assign({}, state, {
          count: exampleInitialState.count
        })
      default:
        return state
    }
  }