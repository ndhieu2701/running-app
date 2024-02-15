import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  value: string;
};

const Value = ({ label, value }: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#fff",
    fontSize: 20,
  },
  value: {
    color: "#AFB3BE",
    fontSize: 50,
    fontWeight: "500",
  },
});

export default Value;
