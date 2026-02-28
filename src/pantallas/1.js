import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable, Image } from "react-native";

export default function Pantalla1() {
  const [imagenes, setImagenes] = useState({}); 

  const elementos = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    texto: `Elemento ${i + 1}`,
  }));

  const celsoPina = "https://imgs.search.brave.com/MakulMLqkVuDkEfvteSKFGcLe8yGOOreT1U7vDA3TrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWlsZW5pby5j/b20vb3kyV0VUM09M/OWNfTDl1RjNqMjZ1/eGVPb3o0PS8zNDV4/MTk0L3VwbG9hZHMv/bWVkaWEvMjAxOS8w/OC8yMS9jZWxzby1w/aW5hLWRlam8tdW4t/Z3Jhbi0xXzMwXzBf/MTA0NV82NTAuanBn"

  const agregarImagen = (id) => {
    setImagenes((prev) => ({
      ...prev,
      [id]: prev[id] ? [...prev[id], celsoPina] : [celsoPina],
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {elementos.map((el) => (
          <View key={el.id} style={styles.elementoContainer}>
            <Pressable
              onPress={() => agregarImagen(el.id)}
              style={styles.pressable}
            >
              <Text style={styles.text}>{el.texto}</Text>
            </Pressable>

            {/* Mostramos todas las imágenes acumuladas */}
            {imagenes[el.id] && imagenes[el.id].map((img, index) => (
              <Image
                key={index}
                source={{ uri: img }}
                style={styles.image}
                resizeMode="cover"
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: { paddingBottom: 120, alignItems: "center" },
  elementoContainer: { marginBottom: 20, width: "100%", alignItems: "center" },
  pressable: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
  },
  text: { fontSize: 20 },
  image: { width: 300, height: 200, marginTop: 10, borderRadius: 10 },
});
