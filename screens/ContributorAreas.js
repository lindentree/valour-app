import React from 'react';
import { Button, View, Text } from 'react-native';

export default class ContributorAreas extends React.Component {
 
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Button
        title="Money"
        onPress={() => this.props.navigation.navigate('Goals')}
      />

      <Button
        title="Time"
        onPress={() => this.props.navigation.navigate('Goals')}
      />

       <Button
        title="Items"
        onPress={() => this.props.navigation.navigate('Goals')}
      />
      </View>
    );
  }
}