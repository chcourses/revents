import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { incrementCounter, decrementCounter } from './testActions'

const actions = {
  incrementCounter,
  decrementCounter
}

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data} = this.props
    return (
      <div>
        <h1>Test Area</h1>
        <h2>{data}</h2>
        <Button onClick={incrementCounter} color='green' content='Increment'/>
        <Button onClick={decrementCounter} color='red' content='Decrement'/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.test.data
})



export default connect(mapStateToProps, actions)(TestComponent);
