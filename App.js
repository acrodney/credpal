import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PayLaterScreen from "./App/screens/PayLaterScreen";

export default function App() {
  return (
    (<StatusBar barStyle={"light-content"} backgroundColor={"#f4f6fd"} />),
    (<PayLaterScreen />)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
