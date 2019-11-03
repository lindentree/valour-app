import React from 'react';
import { Button, View, Text } from 'react-native';

export default class ContributeTime extends React.Component {
 
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Text>
        Our Free Clothing Program is made possible by generous donations of clean, like-new clothing. We offer a convenient curbside drop-off in front of our building every day of the year.

        Hours and location for this curbside drop-off are:
        Monday – Sunday, 9:00am – 2:00pm
        121 Golden Gate Avenue (at Jones Street)

       *You may also make a donation from 2:00pm – 4:00pm by entering the Dining Room at 121 Golden Gate where a staff person will assist you.

       Please donate only clean clothing as we do not have laundry facilities.
      </Text>
      <Button
        title="Continue"
        onPress={() => this.props.navigation.navigate('')}
      />

      </View>
    );
  }
}