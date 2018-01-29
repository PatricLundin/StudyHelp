import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet, Button, AsyncStorage } from 'react-native';

export default class CourseItem extends Component {
  constructor(props) {
    super(props);

    AsyncStorage.getItem('@DataStore:' + props.data.title)
      .then((value) => {
        if(!value) {
          AsyncStorage.setItem(
            '@DataStore:' + props.data.title,
            JSON.stringify(
              {
                count: 0,
                correct: 0,
                incorrect: 0
              })
          )
        }
      })
      .catch((error) => {
        console.log(error);
      });


    this.state = {
      data: props.data,
      navigateTo: props.navigateTo,
      itemData: {
        count: 0,
        correct: 0,
        incorrect: 0
      }
    }
  }

  componentWillMount() {
    this.getPersistentData()
      .then((value) => {
        if(value) {
          this.setState({itemData: JSON.parse(value)});
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getPersistentData = () => {
    return AsyncStorage.getItem('@DataStore:' + this.state.data.title);
  };

  onButtonPress = () => {
    AsyncStorage.setItem(
      '@DataStore:' + this.props.data.title,
      JSON.stringify({
        count: this.state.itemData.count + 1,
        correct: this.state.itemData.correct,
        incorrect: this.state.itemData.incorrect
      }));
    this.props.navigation.navigate(
      this.state.navigateTo,
      {
        data: this.state.data,
        storage: '@DataStore:' + this.props.data.title,
        itemData: {
          count: this.state.itemData.count + 1,
          correct: this.state.itemData.correct,
          incorrect: this.state.itemData.incorrect
        }
      }
    );
    this.setState({itemData: {
        count: this.state.itemData.count + 1,
        correct: this.state.itemData.correct,
        incorrect: this.state.itemData.incorrect
    }});
  };

  render() {
    return (
      <View style={styles.row}>
        <View style={styles.view}>
          <Text style={styles.text}>{"Count: " + this.state.itemData.count}</Text>
          <Text style={styles.text}>{"Correct: " + this.state.itemData.correct}</Text>
          <Text style={styles.text}>{"Incorrect: " + this.state.itemData.incorrect}</Text>
        </View>
        <View style={styles.view2}>
          <Button title={this.state.data.title}
                  style={styles.button}
                  onPress={() => this.onButtonPress()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderBottomWidth: 2
  },
  view: {
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBFBFB'
  },
  view2: {
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2'
  },
  button: {
    flex: 1
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('CourseItem' , () => CourseItem);