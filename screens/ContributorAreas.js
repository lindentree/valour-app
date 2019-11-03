import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ContributorAreas extends React.Component {
 
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Text style={styles.getStartedText}>
        What can you contribute now?
      </Text>
      <TouchableOpacity
            underlayColor="#fff"
            onPress={() => this.props.navigation.navigate('Money')}
            style={styles.choiceScreenButton}>
            <Text style={styles.choiceText}>Money</Text>
      </TouchableOpacity>
      <TouchableOpacity
            underlayColor="#fff"
            onPress={() => this.props.navigation.navigate('Time')}
            style={styles.choiceScreenButton}>
            <Text style={styles.choiceText}>Time</Text>
      </TouchableOpacity>
          <TouchableOpacity
            underlayColor="#fff"
            onPress={() => this.props.navigation.navigate('Items')}
            style={styles.choiceScreenButton}>
            <Text style={styles.choiceText}>Items</Text>
      </TouchableOpacity>
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
  choiceScreenButton:{
    marginRight:30,
    marginLeft:30,
    marginTop:20,
    marginBottom:20,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#136699',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  choiceText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 20,
      paddingLeft : 20,
      paddingRight : 20
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
    marginTop: 30,
    fontSize: 30,
    color: 'black',
    lineHeight: 40,
    textAlign: 'center',
  },
  
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});