import { StyleSheet } from "react-native";

const navigationStyle = StyleSheet.create({
  mainBox: {
    position: "absolute",
    bottom: 5,
    left: -5,
    right: -5,
    elevation: 0,
    backgroundColor: "white",
    borderRadius: 15,
    height: 70,
  },
  opacity: {
    justifyContent: "center",
    alignItems: "center",
  },
  viewdesign: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
  },
  plus: {
    alignItems: "center",
    justifyContent: "center",
    top: Platform.OS == "ios" ? -10 : -40,
    width: Platform.OS == "ios" ? 50 : 70,
    height: Platform.OS == "ios" ? 50 : 70,
    borderRadius: Platform.OS == "ios" ? 25 : 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
});
export default navigationStyle;
