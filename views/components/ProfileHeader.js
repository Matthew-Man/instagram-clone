import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.username}>timmyJones_100</Text>
      <View style={styles.iconsContainer}>
        <Icon style={styles.icon} name="plus-square-o" size={26} color="black" backgroundColor="white"/>
        <FeatherIcon style={styles.icon} name="menu" size={24} color="black" backgroundColor="white"/>
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
  iconsContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 10
  },
  username: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
