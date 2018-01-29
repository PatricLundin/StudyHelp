import React, { Component } from 'react';
import { AppRegistry, WebView } from 'react-native';

export default class MyWeb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: props.url
    }
  }

  render() {
    return (
      <WebView
        source={{uri: this.state.url}}
        style={{marginTop: 5}}
      />
    );
  }
}

AppRegistry.registerComponent('MyWeb' , () => MyWeb);