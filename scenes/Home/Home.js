import React, { Component } from 'react';
import { View, Text, AppRegistry, ScrollView } from 'react-native';

import CourseSelection from '../../components/CourseSelection/CourseSelection';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <ScrollView>
        <CourseSelection navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

AppRegistry.registerComponent('Home' , () => Home);