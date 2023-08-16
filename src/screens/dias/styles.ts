import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");


export const s = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },
    content: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderColor: "#000",
      borderWidth: 1,
    },
    calendar: {
      width: width * 0.95,
      fontSize: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,
      elevation: 21,
      borderRadius: 10,
    },
  });