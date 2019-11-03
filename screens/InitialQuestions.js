import React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


export default class InitialQuestions extends React.Component {
  static navigationOptions = {
    title: 'What level of volunteering?',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Text style={styles.getStartedText}>
        Pick a monthly goal:
      </Text>

      <TouchableOpacity
            underlayColor="#fff"
            onPress={() => this.props.navigation.navigate('Areas')}
            style={styles.choiceScreenButton}>
            <Text style={styles.choiceText}>Casual</Text>
      </TouchableOpacity>
      <TouchableOpacity
            underlayColor="#fff"
            onPress={() => this.props.navigation.navigate('Areas')}
            style={styles.choiceScreenButton}>
            <Text style={styles.choiceText}>Regular</Text>
      </TouchableOpacity>
          <TouchableOpacity
            underlayColor="#fff"
            onPress={() => this.props.navigation.navigate('Areas')}
            style={styles.choiceScreenButton}>
            <Text style={styles.choiceText}>Intense</Text>
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
  appTitle: {
    color: 'green',
    fontSize: 40,
    textAlign: 'center'
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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
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
    marginTop: 30,
    fontSize: 30,
    color: 'black',
    lineHeight: 40,
    textAlign: 'center',
  },
  
  tabBarInfoText: {
    fontSize: 35,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
