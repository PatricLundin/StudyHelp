import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet, Button } from 'react-native';
import MyWeb from "./WebView";

export default class CourseQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.navigation.state.params.data.title,
      url: props.navigation.state.params.data.url
    }
  }

  render() {
    return (
      <MyWeb url={this.state.url}/>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  }
});

AppRegistry.registerComponent('CourseQuestions' , () => CourseQuestions);