import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Value from "./src/components/value";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.values}>
        <Value label="Steps" value="1234" />
        <Value label="Distance" value="2 km" />
        <Value label="Flights Climbed" value="2" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 12
  },
  values: {
    flexDirection: "row",
    gap: 25,
    flexWrap: "wrap",
  },
});
