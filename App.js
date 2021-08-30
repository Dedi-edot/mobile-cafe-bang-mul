import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './src/redux/reducer';
// import Login from './src/screens/auth/Login';
// import Register from './src/screens/auth/Register';
import MainNavigator from './src/navigators/MainNavigator';

const store = createStore(rootReducer, applyMiddleware(Thunk));

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
