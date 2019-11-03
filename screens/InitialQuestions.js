import React from 'react';
import { Button, View, Text } from 'react-native';


export default class InitialQuestions extends React.Component {
  static navigationOptions = {
    title: 'Select monthly goals',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Casual"
        //onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}