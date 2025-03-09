import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    // Add registration logic here
    console.log("Registering with:", username, email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Create a new account!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          left={<TextInput.Icon icon="account" color="#999" />}
          mode="outlined"
          outlineColor="#ccc"
          activeOutlineColor="#FF9800"
        />

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          left={<TextInput.Icon icon="email" color="#999" />}
          mode="outlined"
          outlineColor="#ccc"
          activeOutlineColor="#FF9800"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
          left={<TextInput.Icon icon="lock" color="#999" />}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              color="#999"
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          mode="outlined"
          outlineColor="#ccc"
          activeOutlineColor="#FF9800"
        />

        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
          style={styles.input}
          left={<TextInput.Icon icon="lock" color="#999" />}
          right={
            <TextInput.Icon
              icon={showConfirmPassword ? "eye-off" : "eye"}
              color="#999"
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          }
          mode="outlined"
          outlineColor="#ccc"
          activeOutlineColor="#FF9800"
        />
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}>Login Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  registerButton: {
    backgroundColor: "#FF9800",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: "#333",
  },
  loginLink: {
    fontSize: 16,
    color: "#FF9800",
    fontWeight: "bold",
  },
});

export default SignupScreen;
