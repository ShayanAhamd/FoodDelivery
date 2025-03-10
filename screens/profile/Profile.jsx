import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profileBanner}>
            <Text style={styles.welcomeText}>Welcome to Food Planet</Text>
            <Text style={styles.subText}>
              Sign up or log in to view your account
            </Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => console.log("Login pressed")}
            >
              <Text style={styles.loginButtonText}>LOG IN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => console.log("Signup pressed")}
            >
              <Text style={styles.signupButtonText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>

          {/* Features Section */}
          <View style={styles.featuresContainer}>
            <FeatureItem
              title="Your Orders"
              description="Track, view and manage your food orders"
            />
            <FeatureItem
              title="Saved Addresses"
              description="Save your delivery locations"
            />
            <FeatureItem
              title="Payment Methods"
              description="Add and manage your payment options"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// Helper component for feature items
const FeatureItem = ({ title, description }) => (
  <View style={styles.featureItem}>
    <View style={styles.featureIconPlaceholder}></View>
    <View style={styles.featureTextContainer}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    backgroundColor: "#D70F64", // Foodpanda's pink color
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileBanner: {
    backgroundColor: "white",
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: "#777777",
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  loginButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF9800",
    flex: 0.48,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#FF9800",
    fontWeight: "600",
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: "#FF9800",
    paddingVertical: 12,
    borderRadius: 8,
    flex: 0.48,
    alignItems: "center",
  },
  signupButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  featuresContainer: {
    backgroundColor: "white",
    marginTop: 15,
    paddingVertical: 10,
  },
  featureItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    alignItems: "center",
  },
  featureIconPlaceholder: {
    width: 30,
    height: 30,
    backgroundColor: "#f1f1f1",
    borderRadius: 15,
    marginRight: 15,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 3,
  },
  featureDescription: {
    fontSize: 14,
    color: "#777777",
  },
});
