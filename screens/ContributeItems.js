import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class ContributeTime extends React.Component {
 
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Text style={styles.headerText}>You chose to contribute items!</Text>

      <Text style={styles.bodyText}>
        Our Free Clothing Program is made possible by generous donations of clean, like-new clothing. 
        We offer a convenient curbside drop-off in front of our building every day of the year.

        Hours and location for this curbside drop-off are:
        Monday – Sunday, 9:00am – 2:00pm
        121 Golden Gate Avenue (at Jones Street)

       *You may also make a donation from 2:00pm – 4:00pm by entering the Dining Room at 121 Golden Gate where a staff person will assist you.

       Please donate only clean clothing as we do not have laundry facilities.
      </Text>
       <TouchableOpacity
            underlayColor="#fff"
            onPress={() => this.props.navigation.navigate('SignUp')}
            style={styles.nextScreenButton}>
            <Text style={styles.nextText}>Next</Text>
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
  headerText: {
    marginBottom: 20,
    color: 'black',
    fontSize: 30,
    lineHeight: 40,
    textAlign: 'center',
  },
  bodyText: {
    marginBottom: 20,
    color: 'black',
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
  },
   nextScreenButton:{
    marginRight:130,
    marginLeft:130,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#FF9100',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  nextText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 20,
      paddingRight : 20,
      fontSize: 20
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
