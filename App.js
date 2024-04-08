import React, {useRef, useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {PermissionsAndroid, Platform} from 'react-native';
import {
ClientRoleType,
createAgoraRtcEngine,
IRtcEngine,
ChannelProfileType,
} from 'react-native-agora';
import AgoraComponent from './AgoraComponent';

const appId = '<--Insert app ID here-->';
const channelName = '<--Insert channel name here-->';
const token = '<--Insert authentication token here-->';
const uid = 0;
export default function App() {

  return (
    <SafeAreaView style={styles.main}>
     <AgoraComponent/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
      paddingHorizontal: 25,
      paddingVertical: 4,
      fontWeight: 'bold',
      color: '#ffffff',
      backgroundColor: '#0055cc',
      margin: 5,
  },
  main: {flex: 1, alignItems: 'center'},
  scroll: {flex: 1, backgroundColor: '#ddeeff', width: '100%'},
  scrollContainer: {alignItems: 'center'},
  videoView: {width: '90%', height: 200},
  btnContainer: {flexDirection: 'row', justifyContent: 'center'},
  head: {fontSize: 20},
});
