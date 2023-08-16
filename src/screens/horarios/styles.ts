import { StyleSheet } from "react-native";
export const s = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    content: {
      flex: 1,
      flexDirection: "column",
      columnGap: 10,
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    viewSubmit: {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    btnSubmit: {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#00a6ff",
      borderRadius: 10,
    },
    list: {
      flex: 1,
      width: "100%",
  
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    th: {
      height: 50,
      fontSize: 22,
    },
    headerList: {
      width: "100%",
      flexDirection: "row",
      gap: 10,
      justifyContent: "space-between",
    },
    item: {
      flex: 1,
      width: "100%",
      height: 50,
      borderColor: "#000",
      borderWidth: 1,
      borderBottomWidth: 0,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
    },
    lastItem: {
      padding: 10,
      flex: 1,
      justifyContent: "space-between",
      flexDirection: "row",
      width: "100%",
      height: 50,
      borderColor: "#000",
      borderWidth: 1,
      alignItems: "center",
    },
    hora: {
      fontSize: 22,
    },
    flatList: {
      width: "100%",
      marginBottom: 10,
    },
  });
  