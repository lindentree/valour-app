import React from 'react';

class SelectGoalsScreen extends React.Component {
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