import React from "react";
import { StyleSheet, View } from "react-native";
// import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

// const Button = styled.TouchableOpacity`
//   width: 42px;
//   height: 42px;
//   border-radius: 21px;
//   background: #eeeeee;
//   align-items: center;
//   justify-content: center;
//   margin-left: 16px;
// `;

const AppBar = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>facebook</Text> */}
      {/* <View style={styles.row}> */}
      {/* <Button style={styles.screen}> */}
      {/* <Feather name="search" size={29} color="black" /> */}
      {/* </Button> */}

      {/* <Button> */}
      {/* <MaterialCommunityIcons name="facebook-messenger" size={29} /> */}
      {/* </Button> */}
      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "58px",
    padding: "0 11px",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    color: "#3a86e9",
    fontSize: "25px",
    fontWeight: "bold",
    letterSpacing: "-0.3px"
  },
  row: {
    flexDirection: "row"
  }
});
export default AppBar;
