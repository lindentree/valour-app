import React from 'react';
import { Text, View, Button } from 'react-native';

export default class CreateProfile extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Text>
       You've completed your first task. Create your account to save your progress.
      </Text>
     

      </View>
    );
  }
}