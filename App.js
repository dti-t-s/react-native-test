/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Share, Button, StyleSheet, TextInput, Clipboard } from 'react-native';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      input: "",
      text: ""
    }
  }
  pbcopy() {
    const { input } = this.state
    Clipboard.setString(input)
  }

  async getpb() {
    const text = await Clipboard.getString()
    this.setState({text})
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'F5FCFF',
      }}>
        <TextInput
          style={{
            width: '100%',
            textAlign: 'center',
            borderBottomWidth: 1,
            borderColor: '#ccc'
          }}
          value={this.state.input}
          onChangeText={input =>this.setState({input})}
        />
        <Button
          onPress={()=>this.pbcopy()} title="save to Clipboed"
        />
        <Text>{this.state.text}</Text>
        <Button
          onPress={()=>this.getpb()} title="get from Clipboed"
        />
      </View>
    );
  }
}