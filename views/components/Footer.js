import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Footer({tabNavigation}) {
  return (
    <View style={styles.footerContainer}>
        <Icon 
          style={styles.icon} 
          name="home" 
          size={30} 
          color="black" 
          backgroundColor="white" 
          onPress={tabNavigation.home}
        />
        <Icon 
          style={styles.icon} 
          name="search" 
          size={24} 
          color="black" 
          backgroundColor="white"
          onPress={tabNavigation.explore}
        />
        <Icon 
          style={styles.icon} 
          name="video" 
          size={24} 
          color="black" 
          backgroundColor="white"  
        />
        <Icon 
          style={styles.icon} 
          name="shopping-bag" 
          size={24} 
          color="black" 
          backgroundColor="white"
        />
        <Pressable onPress={tabNavigation.profile}>
          <Image 
            style={styles.profile} 
            source={require("../../assets/profile-placeholder.jpg")} 
          />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "white",
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 10
  },
  profile: {
    height: 30,
    width: 30,
    borderRadius: 50
  }
});
