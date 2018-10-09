
import { RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';
import { ExampleReducer } from '../actions/Example';
import { NavBarReducer } from '../actions/Navbar';
import { sessionReducer } from './session';



const rootReducer = combineReducers({
  session:sessionReducer,
  NavBarReducer,
  ExampleReducer
})

export interface State {
  router: RouterState
}

export default rootReducer