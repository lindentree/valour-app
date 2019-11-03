import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class ContributorAreas extends React.Component {
 
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Text style={styles.getStartedText}>
        What can you contribute now?
      </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});