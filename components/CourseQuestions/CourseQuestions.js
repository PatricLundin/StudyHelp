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
      <View style={styles.row}>
        <MyWeb url={this.state.url}/>
        <View style={styles.bottom}>
          <View style={styles.button1}>
            <Button title={"left"} onPress={() => console.log("Left")}/>
          </View>
          <View style={styles.button1}>
            <Button title={"Right"} onPress={() => console.log("Right")}/>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  row: {
    flex: 1,
  },
  bottom: {
    height: 40,
    maxHeight: 40,
    flex: 1,
    flexDirection: 'row',
  },
  button1: {
    height: 40,
    maxHeight: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('CourseQuestions' , () => CourseQuestions);