import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconAntDesign from "react-native-vector-icons/AntDesign";

import PostActions from "./PostActions";

export default function Post() {
  return (
    <View>
      <View style={styles.postHeader}>
        <View style={styles.profile}>
          <Image style={styles.profileImage} source={require("../../../assets/profile-placeholder.jpg")}/>
          <Text style={styles.boldText}>timmyJones_100</Text>
        </View>
        <Icon style={styles.postOptions} name="ios-ellipsis-horizontal-sharp" size={24} color="black" backgroundColor="white"/>
      </View>
      <Image style={styles.postImage} source={require("../../../assets/placeholderPost1.jpg")}/>
      <View style={styles.postFooter}>
        <PostActions/>
        <Text style={[styles.boldText, styles.footerText]}>156 likes</Text>
        <Text style={styles.footerText}>
          <Text style={styles.boldText}>timmyJones_100 </Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Text>
        <Text style={[styles.comments, styles.footerText]}>View all 7 comments</Text>
        <Text style={[styles.timestamp, styles.footerText]}>6 hours ago</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  postHeader: {
    padding: 10,
    paddingLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 10
  },
  boldText: {
    fontWeight: "bold",
  },
  postOptions: {
    margin: 10
  },
  postImage: {
    height: 450,
    width: "100%"
  },
  postFooter: {
    marginLeft: 16,
    marginRight: 8
  },
  footerText: {
    paddingBottom: 6
  },
  comments: {
    color: "grey"
  },
  timestamp: {
    color: "grey",
    fontSize: 11
  }
});