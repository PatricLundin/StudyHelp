import React, { Component } from 'react';
import { View, Text, AppRegistry, ScrollView } from 'react-native';


export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <ScrollView>
        <Text>Settings</Text>
      </ScrollView>
    )
  }
}

AppRegistry.registerComponent('Settings' , () => Settings);