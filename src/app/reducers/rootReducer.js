import testReducer from '../../features/testearea/testReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  test: testReducer
})

export default rootReducer