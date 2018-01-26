import React, { Component } from 'react';
import { View, Text, AppRegistry, ScrollView } from 'react-native';


export default class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <View>
        <Text>{this.props.navigation.state.params.info}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('Course' , () => Course);