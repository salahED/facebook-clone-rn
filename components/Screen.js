import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, ImageBackground } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <ImageBackground
        source={require("../assets/bg.jpg")}
        style={{
          flex: 1,
          resizeMode: "cover",
          width: "100%",
          height: "100%"
        }}
      >
        <View style={style}>{children}</View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
});

export default Screen;
