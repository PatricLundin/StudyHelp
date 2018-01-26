import React, { Component } from 'react';
import { View, Text, AppRegistry, ScrollView } from 'react-native';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <ScrollView>
        <Text>Home</Text>
      </ScrollView>
    )
  }
}

AppRegistry.registerComponent('Home' , () => Home);