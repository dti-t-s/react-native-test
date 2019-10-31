/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Share, Button } from 'react-native';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      position: {},
    }
  }
  openShare() {
    Share.share({
      title: 'タイトル',
      message: '概要'
    }, {}).then((result, activityType) => {
      if (result.action == Share.dismissedAction) {
        
      } else if(result.action == Share.sharedAction){
        
      } else {

      }
    });
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'F5FCFF',
      }}>
        
        <Button
          onPress={()=>this.openShare()} title={'シェアを開く'}
        />
      </View>
    );
  }
}