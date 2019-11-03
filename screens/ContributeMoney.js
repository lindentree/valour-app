import React from 'react';
import { Text, View, Button } from 'react-native';

export default class ContributeMoney extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Text>
       You can donate to the St. Anthony Foundation, our partner organization. 
       They have been serving over 42 million people since 1950.

      150 Golden Gate Avenue
      San Francisco, CA 94102
      (415) 241 2600
      info@stanthonysf.org
      </Text>
      <Button
        title="Continue"
        onPress={() => this.props.navigation.navigate('SignUp')}
      />

      </View>
    );
  }
}