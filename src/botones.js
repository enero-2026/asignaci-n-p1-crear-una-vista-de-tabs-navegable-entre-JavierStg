import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Botones({ onPress1, onPress2, onPress3 }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress1}>
        <Text style={styles.text}>Botón 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onPress2}>
        <Text style={styles.text}>Botón 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onPress3}>
        <Text style={styles.text}>Botón 3</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    flexDirection: "row",
    backgroundColor: "#222",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    padding: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});