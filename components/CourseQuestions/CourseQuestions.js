import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet, Button, AsyncStorage } from 'react-native';
import MyWeb from "./WebView";

export default class CourseQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.navigation.state.params.data.title,
      url: props.navigation.state.params.data.url,
      storage: props.navigation.state.params.storage,
      itemData: props.navigation.state.params.itemData
    }
  }

  onButtonPress = (correct) => {
    let data = this.state.itemData;
    if(correct) {
      data.correct = data.correct + 1;
      AsyncStorage.setItem(this.state.storage, JSON.stringify(data));
    } else {
      data.incorrect = data.incorrect + 1;
      AsyncStorage.setItem(this.state.storage, JSON.stringify(data));
    }
    this.props.navigation.goBack();

  };

  render() {
    return (
      <View style={styles.row}>
        <MyWeb url={this.state.url}/>
        <View style={styles.bottom}>
          <View style={styles.button1}>
            <Button title={"Nope"} onPress={() => this.onButtonPress(false)}/>
          </View>
          <View style={styles.button1}>
            <Button title={"Yes"} onPress={() => this.onButtonPress(true)}/>
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