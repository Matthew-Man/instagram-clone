import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text, View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeFeed from './home/HomeFeed';
import Profile from './profile/Profile';
import Explore from './explore/Explore'
import ProfileHeader from './components/ProfileHeader'


export default function MainTabs() {
  // Possible active tabs: "home", "explore", "profile",
  const [activeTab, setActiveTab] = useState("home");

  const switchAndStoreTab = (tab) => {
    setActiveTab(tab);
    storeTab(tab);
  }

  const tabNavigation = {
    home: () => switchAndStoreTab("home"),
    explore: () => switchAndStoreTab("explore"),
    profile: () => switchAndStoreTab("profile")
  }

  useEffect(() => {
    console.log(getTab())
  }, [activeTab])

  return (
    <SafeAreaView style={styles.container}>
      {selectHeader(activeTab)}
      {selectTab(activeTab)}
      <Footer tabNavigation={tabNavigation}/>
    </SafeAreaView>
  );
}

function selectTab(tab) {
  if (tab === "home") return <HomeFeed/>;
  if (tab === "profile") return <Profile/>;
  if (tab === "explore") return <Explore/>;
}

function selectHeader(tab) {
  if (tab === "profile") return <ProfileHeader/>
  else return <Header/>
}

async function storeTab(tab) {
  try {
    await AsyncStorage.setItem("lastTab", tab);
  } catch (error) {
    console.log(error);
  }
}

async function getTab() {
  try {
    const data = await AsyncStorage.getItem("lastTab");
    return data
  } catch (error) {
    console.log(error);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});