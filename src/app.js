import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAOCVGtOFGjwRjBQXw5cVbSg2lvHRiUEGY',
      authDomain: 'manager-38c41.firebaseapp.com',
      databaseURL: 'https://manager-38c41.firebaseio.com',
      storageBucket: 'manager-38c41.appspot.com',
      messagingSenderId: '972724156666'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
