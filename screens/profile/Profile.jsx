import React from "react";
import { View, Text, styles } from "react-native";

const ProfileScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Profile Screen</Text>
    <Text onPress={() => navigation.navigate("Login")}>
      Login
    </Text>
    <Text onPress={() => navigation.navigate("Login")}>
      Signup
    </Text>
  </View>
);

export default ProfileScreen;
