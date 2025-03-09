import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", email, password);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>
        Login
      </Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.textInput}
        theme={{ colors: { text: "#000" } }} // Ensure black text color
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.textInput}
        theme={{ colors: { text: "#000" } }}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Text onPress={() => navigation.navigate("Login")} style={styles.toSignup}>
        Don't have an account? Sign up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  textInput: {
    color: "#000",
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#F9C12C",
  },
  toSignup: {
    color: "#000",
    textAlign: "center",
    paddingTop: 5,
    justifyContent: "center",
  },
});

export default LoginScreen;
