import React, { Component } from 'react';
import { View, Text, AppRegistry, ScrollView, ListView, StyleSheet } from 'react-native';

import CourseInfo from "./CourseInfo";
import CourseListItem from '../CourseSelection/CourseListItem'

export default class Course extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.navigation.state.params.data.data),
    };
  }

  render() {
    return (
      <View style={styles.view}>
        <CourseInfo title={this.props.navigation.state.params.data.title}
                    text={this.props.navigation.state.params.data.text}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <CourseListItem
              navigation={this.props.navigation}
              data={rowData}
              navigateTo={'CourseQuestions'}
            />}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column'
  }
});

AppRegistry.registerComponent('Course' , () => Course);