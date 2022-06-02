import React from "react";
import { Pressable, Text, View, StyleSheet, Image, ScrollView } from 'react-native';


export default function Profile() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profileHead}>
          <Image style={styles.profileImage} source={require("../../assets/profile-placeholder.jpg")}/>
          <View style={styles.profileInfoCard}>
            <View style={styles.profileInfo}>
              <Text style={styles.textLargeBold}>10</Text>
              <Text>Posts</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.textLargeBold}>403</Text>
              <Text>Followers</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.textLargeBold}>500</Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>
        <View style={styles.bioContainer}>
          <Text style={styles.textBold}>Timothy Jones</Text>
          <Text style={styles.textPadding}>My bio is kinda empty...</Text>
        </View>
        <View style={styles.editProfileButtonContainer}>
          <Pressable style={styles.editProfileButton}>
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  profileHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  profileImage: {
    height: 90,
    width: 90,
    borderRadius: 50,
    marginRight: 10
  },
  profileInfoCard: {
    flexDirection: "row",
    justifyContent: "center",
    width: "60%",
    marginRight: 20
  },
  profileInfo: {
    width: 65,
    margin: 8,
    alignItems: "center"
  },
  textLargeBold: {
    fontSize: 16,
    fontWeight: "600"
  },
  textBold: {
    fontWeight: "600"
  },
  bioContainer: {
    paddingTop: 10
  },
  textPadding: {
    paddingTop: 2
  },
  editProfileButtonContainer: {
    marginVertical: 8
  },
  editProfileButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#c7c7c7",
    backgroundColor: 'white',
  },
  editProfileButtonText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
})