import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20
  },
  taskItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textItemContainer: {
    flex: 9,
    paddingLeft: 8
  },
  textActiveItem: {
    fontSize: 20
  },
  textDoneItem: {
    fontSize: 20,
    textDecorationLine: "line-through"
  },
  checkboxContainer: {
    flex: 1
  },
  listTask: {
    flex: 8
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 22,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "column",
    height: 130
  },
  header: {
    height: 60,
    backgroundColor: "dodgerblue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerLeft: {
    flex: 3,
    alignItems: "flex-start",
    paddingLeft: 10
  },
  headerRight: {
    flex: 3,
    alignItems: "flex-end",
    paddingRight: 10
  },
  headerCenter: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 18,
    color: "white"
  },
  headerTitle: {
    fontSize: 26,
    color: "white",
    fontWeight: "400"
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  inputRow: {
    flex: 3
  },
  cancelButton: {
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    padding: 15,
    borderRadius: 4
  },
  addButton: {
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    padding: 15,
    borderRadius: 4
  },
  textAdd: {
    fontSize: 18
  }
}));
