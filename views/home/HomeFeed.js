import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

import Post from './components/Post';

export default function HomeFeed() {
  return (
    <ScrollView style={styles.body}>
        <Post/>
        <Post/>
        <Post/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  }
});