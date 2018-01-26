import React, { Component } from 'react';
import { View, Text, AppRegistry, ListView } from 'react-native';

import CourseListItem from './CourseListItem';

export default class CourseSelection extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(dataSet),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <CourseListItem navigation={this.props.navigation} text={rowData} />}
      />
    )
  }
}

const dataSet = [
  'TMME27 Mekanik del 2',
  'Random kurs'
];

AppRegistry.registerComponent('CourseSelection' , () => CourseSelection);