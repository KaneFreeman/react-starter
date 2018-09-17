import { connect } from 'react-redux'
import { incrementCounter, getData } from '../actions'
import App from './App'
import { AppState } from '../store';

const mapStateToProps = (state: AppState, ownProps: any) => ({
  data: state.exampleRedux.data !== '' ? state.exampleRedux.data : undefined,
  counter: state.exampleRedux.exampleCounter,
  state: state
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  incrementCounter: () => dispatch(incrementCounter()),
  getData: () => dispatch(getData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
