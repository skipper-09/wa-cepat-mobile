import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import Home from "./src/screens/home";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
    </SafeAreaView>
  );
}
