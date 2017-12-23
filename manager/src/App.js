import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
      const config = {
        apiKey: "AIzaSyAD8oNImyXqW0m0S2Ko1GJONz53MPl9tik",
        authDomain: "manager-d252f.firebaseapp.com",
        databaseURL: "https://manager-d252f.firebaseio.com",
        projectId: "manager-d252f",
        storageBucket: "manager-d252f.appspot.com",
        messagingSenderId: "553842523944"
      };
      firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;