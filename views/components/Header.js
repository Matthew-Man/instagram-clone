import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const logoScale = 0.42;

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.instagramLogo} source={require("../../assets/instagram-logo.png")}/>
      <View style={styles.iconsContainer}>
        <Icon style={styles.icon} name="plus-square-o" size={26} color="black" backgroundColor="white"/>
        <Icon style={styles.icon} name="heart-o" size={24} color="black" backgroundColor="white"/>
        <Icon style={styles.icon} name="send-o" size={22} color="black" backgroundColor="white"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "white",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "solid",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    minHeight: 60
  },
  instagramLogo: {
    height: 115 * logoScale,
    width: 330 * logoScale,
  },
  iconsContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 10
  }
});
