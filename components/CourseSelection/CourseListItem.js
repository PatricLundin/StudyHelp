import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet, Button } from 'react-native';

export default class CourseListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      navigateTo: props.navigateTo
    }
  }

  render() {
    return (
      <View style={styles.row}>
        <Button title={this.state.data.title}
                style={styles.row}
                onPress={() => this.props.navigation.navigate(
                  this.state.navigateTo,
                  {
                    data: this.state.data
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
    height: 50,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  }
});

AppRegistry.registerComponent('CourseListItem' , () => CourseListItem);