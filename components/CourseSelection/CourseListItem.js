import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet, Button } from 'react-native';

export default class CourseListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: props.text
    }
  }

  render() {
    return (
      <View style={styles.row}>
        <Button title={this.state.displayText}
                style={styles.row}
                onPress={() => this.props.navigation.navigate(
                  'Course',
                  {
                    info: this.state.displayText
                  }
                )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  }
});

AppRegistry.registerComponent('CourseListItem' , () => CourseListItem);