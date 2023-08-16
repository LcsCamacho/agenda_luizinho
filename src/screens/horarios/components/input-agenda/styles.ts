import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  item: {
    flex: 1,
    width: "100%",
    height: 65,
    borderColor: "#000",
    borderWidth: 1,
    borderBottomWidth: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  lastItem: {
    padding: 10,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    height: 65,
    borderColor: "#000",
    borderWidth: 1,
    alignItems: "center",
  },
  hora: {
    fontSize: 18,
  },
  input: {
    fontSize: 18,
  },
  inputNome: {
    fontSize: 18,
    minWidth: 50,
  },
  inputContato: {
    fontSize: 18,
    minWidth: 135,
    textAlign: "center",
  }
});
