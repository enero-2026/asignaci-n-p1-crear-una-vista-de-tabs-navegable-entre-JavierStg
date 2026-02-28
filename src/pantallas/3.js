import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Pantalla3() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});