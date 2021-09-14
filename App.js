import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Users} from "./components/users/Users";
import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";


export default function App() {
  return (

      <View style={styles.container}>
        <StatusBar style="auto"/>

        <Text style={styles.container_text}>USERS INFO</Text>
        <Users/>

        <Text style={styles.container_text}>POSTS INFO</Text>
        <Posts/>

        <Text style={styles.container_text}>COMMENTS INFO</Text>
        <Comments/>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  container_text: {
    fontWeight: 'bold'
  }
});