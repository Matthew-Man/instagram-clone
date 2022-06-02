import React, {useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconAntDesign from "react-native-vector-icons/AntDesign";

export default function PostActions() {
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isPostSaved, setIsPostSaved] = useState(false);

  const handleLikedPost = () => setIsPostLiked(prev => !prev);
  const handleLikedSaved = () => setIsPostSaved(prev => !prev);

  return (
    <View style={styles.postActions}>
        <View style={styles.postPrimaryActions}>
          <IconFontAwesome 
            style={[styles.actionIcon, styles.antiPaddingLeft]} 
            name={isPostLiked ? "heart" : "heart-o"} 
            size={26} 
            color={isPostLiked ? "red" : "black" }
            onPress={handleLikedPost}
          />
          <IconAntDesign style={styles.actionIcon} name="message1" size={24} color="black" backgroundColor="white"/>
          <IconFontAwesome style={styles.actionIcon} name="send-o" size={24} color="black" backgroundColor="white"/>
        </View>
      <IconFontAwesome 
        style={styles.actionIcon} 
        name={isPostSaved ? "bookmark" : "bookmark-o"} 
        size={24} 
        color="black"
        onPress={handleLikedSaved}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  postActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  postPrimaryActions: {
    flexDirection: "row",
    alignItems: "center"
  },
  actionIcon: {
    padding: 10,
  },
  antiPaddingLeft: {
    paddingLeft: 0
  },
})
