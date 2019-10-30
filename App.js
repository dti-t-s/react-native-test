/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, TextInput, View, Settings, Button } from 'react-native';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      hoge: '',
      fuga: ''
    }
  }
  componentWillMount() {
    const hoge = Settings.get('hoge');
    const fuga = Settings.get('fuga');

    this.setState({hoge: hoge ? hoge : '', fuga: fuga ? fuga : ''})
  }
  changeSettings(){
    const { hoge, fuga } = this.state
    Settings.set({hoge: hoge, fuga: fuga})
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'F5FCFF',
      }}>
        <Text>{'hoge:' + this.state.hoge}</Text>
        <Text>{'fuga:' + this.state.fuga}</Text>
        <TextInput
          style={{
            width: '100%',
            textAlign: 'center',
            borderBottomWidth: 1,
            borderColor: '#ccc'
          }}
          value={this.state.hoge}
          onChangeText={hoge => this.setState({hoge})}
        />
        <TextInput
          style={{
            width: '100%',
            textAlign: 'center',
            borderBottomWidth: 1,
            borderColor: '#ccc'
          }}
          value={this.state.fuga}
          onChangeText={fuga => this.setState({fuga})}
        />
        <Button
          onPress={()=>{this.changeSettings()}}
          title="設定を変更"
        />
      </View>
    );
  }
}