   
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { NativeRouter, Route, Link } from "react-router-native";
import {Home} from './Home'
import Register from './Register'
import Entry from './Entry'
import Cards from './Cards'


class App extends Component{
   render() {
      return (
      <NativeRouter>
         <View>

         <Route exact path="/" component={Home} />
         <Route exact path="/Register" component={Register} />
         <Route exact path="/Entry" component={Entry} />
         <Route exact path="/Cards" component={Cards} />

            
         </View>
      </NativeRouter>
      );
   }
}

export default App;