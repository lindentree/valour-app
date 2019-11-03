import React from 'react';
import { Button, View, Text, Image } from 'react-native';


export default class InitialQuestions extends React.Component {
  static navigationOptions = {
    title: 'Select monthly goals',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Button
        title="Casual"
        onPress={() => navigate('Areas')}
      />
       <Button
        title="Regular"
        onPress={() => navigate('Areas')}

      />
       <Button
        title="Intense"
        onPress={() => navigate('Areas')}
      />
      </View>
    );
  }
}