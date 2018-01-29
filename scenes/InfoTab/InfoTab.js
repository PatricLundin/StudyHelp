import React, { Component } from 'react';
import { View, Text, AppRegistry, ScrollView } from 'react-native';


export default class InfoTab extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <ScrollView>
        <Text>InfoTab</Text>
      </ScrollView>
    )
  }
}

AppRegistry.registerComponent('InfoTab' , () => InfoTab);