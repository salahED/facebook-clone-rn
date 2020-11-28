import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "./Screen";
import { black } from "ansi-colors";

export default function MainLayout() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.head}></View>
          <View style={styles.menu}></View>
          <View style={styles.post}></View>
          <View style={styles.friendList}></View>
          <View style={styles.stories}></View>
        </View>

        <View style={styles.body}>
          <View style={styles.post}></View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: "column"
  },
  header: {
    backgroundColor: "#007677",
    width: "100%",
    height: "65%",
    position: "fixed"
  },
  head: {},
  menu: {},
  post: {},
  friendList: {},
  stories: {},
  body: {
    backgroundColor: "red",
    width: "100%",
    height: "100%"
  },
  post: {}
});
