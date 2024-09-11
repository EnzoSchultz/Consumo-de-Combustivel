import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView
} from "react-native";

export default function InputScreen({ navigation }) {
  const [km, setKm] = useState("");
  const [litros, setLitros] = useState("");

  const handleCalculate = () => {
    const convertToFloat = (value) => {
      return parseFloat(value.replace(",", "."));
    };

    if (!km || !litros) {
      alert("Por favor, insira ambos os valores!");
      return;
    }

    const kmValue = convertToFloat(km);
    const litrosValue = convertToFloat(litros);

    if (isNaN(kmValue) || isNaN(litrosValue) || litrosValue === 0) {
      alert(
        "Por favor, insira valores válidos e certifique-se de que Litros não seja zero!"
      );
      return;
    }

    const media = kmValue / litrosValue;
    navigation.navigate("Resultado", { media });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Quilometragem Percorrida (Km):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={km}
        onChangeText={setKm}
        placeholder="Ex: 150"
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Litros de Gasolina Consumidos:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={litros}
        onChangeText={setLitros}
        placeholder="Ex: 10"
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#555",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});