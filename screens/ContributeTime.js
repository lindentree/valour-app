import React from 'react';
import { Button, View, Text } from 'react-native';

export default class ContributeTime extends React.Component {
 
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Text>
        Our holiday shifts fill up quickly. If you would like to express interest in volunteering on Thanksgiving Day or Christmas Day, click here. Please remember that St. Anthony’s is in need of volunteer support every day of the year (especially the week after Christmas and in January). We invite you to volunteer when our guests need you the most by signing up via our shift calendar!
      </Text>
      <Button
        title="Continue"
        onPress={() => this.props.navigation.navigate('')}
      />

      </View>
    );
  }
}