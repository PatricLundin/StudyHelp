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
        renderRow={(rowData) =>
          <CourseListItem
            navigation={this.props.navigation}
            data={rowData}
            navigateTo={'Course'}
          />}
      />
    )
  }
}

const dataSet = [
  {
    title: 'TMME27 Mekanik del 2',
    text: 'Bevis och annat från kursen TMME27',
    data: [
      {
        title: 'Bevis 1',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 2',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 3',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 4',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 5',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 6',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 7',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 8',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 9',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 10',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 11',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 12',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 13',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 14',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
      {
        title: 'Bevis 15',
        url: 'http://studieboken.se/images/1/15/Teori_TMME27.pdf'
      },
    ]
  }
];

AppRegistry.registerComponent('CourseSelection' , () => CourseSelection);