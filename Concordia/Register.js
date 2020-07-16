/*
import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Регистрация</Text>
          <TextInput placeholder=" E-mail" style={styles.textInput} />
          <TextInput placeholder=" Password" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button  title="Далее" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    marginBottom: 3
  },
  btnContainer: {
    backgroundColor: "black",
    
    marginTop: 12
  }
});

export default KeyboardAvoidingComponent; \
*/

import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,   } from 'react-native'
import { Link, withRouter } from "react-router-native";
import {Content, Button } from 'native-base';


class Inputs extends Component {
   
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>
          <Link style={styles.escButton} to="/" ><Text style={styles.escButtonText}>⇦</Text></Link>
            {/* <Button style={styles.escButton} small >
               <Text style={styles.escButtonText}>⇦</Text>
            </Button> */}
         <Text style = {styles.text}>Регистрация</Text>
         
         
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Email"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Password"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Далее </Text>
            </TouchableOpacity>
            
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#000000',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#000000',
      padding: 17 ,
      margin: 10 ,
      height: 50,
      justifyContent: "center",
      flexDirection: "row",
      justifyContent: "space-evenly"
   },
   submitButtonText:{
      fontSize: 20,
      height: 20,
      
      
      color: "white"
   },
   text:{
      marginTop: 30,
      marginLeft: 40,
      marginBottom: 40,
      fontSize: 35,
      height: 35,
      color: "black",
      fontStyle: "italic",
      textAlign:"left",
      fontWeight: "normal",
     },
     escButton:{
      marginTop: 10,
      marginLeft: 15,
      width: 50,
      backgroundColor: 'white',
     },
     escButtonText:{
      fontSize: 30,
      height: 20,
      color: "black"
   },
})