import React, { Component } from 'react';
import { View, Button, AppRegistry, StyleSheet, AsyncStorage } from 'react-native';


export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  onReset = () => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
          let key = store[i][0];
          let value = store[i][1];

          AsyncStorage.setItem(key, JSON.stringify({
            count: 0,
            correct: 0,
            incorrect: 0
          }));
        });
      });
    });
  };

  render() {
    return (
      <View style={styles.view}>
        <Button title={"Reset all data"} onPress={() => this.onReset()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
});

AppRegistry.registerComponent('Settings' , () => Settings);