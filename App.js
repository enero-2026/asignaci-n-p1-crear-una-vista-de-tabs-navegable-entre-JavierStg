import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Botones from "./src/botones";
import Pantalla1 from "./src/pantallas/1";
import Pantalla2 from "./src/pantallas/2";
import Pantalla3 from "./src/pantallas/3";

export default function App() {
  const [pantalla, setPantalla] = useState(1);

  const renderPantalla = () => {
    if (pantalla === 1) return <Pantalla1 />;
    if (pantalla === 2) return <Pantalla2 />;
    if (pantalla === 3) return <Pantalla3 />;
  };

  return (
    <View style={styles.container}>
      {renderPantalla()}

      <Botones
        onPress1={() => setPantalla(1)}
        onPress2={() => setPantalla(2)}
        onPress3={() => setPantalla(3)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});