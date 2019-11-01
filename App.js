import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <Calendar />
      </View>
    );
  }
}