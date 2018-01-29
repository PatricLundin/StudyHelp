import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet } from 'react-native';


export default class CourseInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      text: props.text
    }
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>{this.state.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    height: 50,
    maxHeight: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    height: 20,
    maxHeight: 20,
    fontSize: 20,
    flex: 1
  },
  text: {
    height: 30,
    maxHeight: 30,
  }
});

AppRegistry.registerComponent('CourseInfo' , () => CourseInfo);