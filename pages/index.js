import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../data/test/actions'
import Examples from '../components/examples'


const Index = (props) => {
  const getInitialProps =  ({ reduxStore, req }) =>  {
   
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  const componentDidMount = () => {
    const { dispatch } = props
    timer = startClock(dispatch)
  }

  const componentWillUnmount = () => {
    clearInterval(timer)
  }

  
  return <Examples />
  
}

export default connect()(Index)
