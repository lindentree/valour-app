import React from 'react';
import { Button, View, Text } from 'react-native';

export default class ContributorAreas extends React.Component {
 
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Button
        title="Money"
        onPress={() => this.props.navigation.navigate('Money')}
      />

      <Button
        title="Time"
        onPress={() => this.props.navigation.navigate('Time')}
      />

       <Button
        title="Items"
        onPress={() => this.props.navigation.navigate('Items')}
      />
      </View>
    );
  }
}