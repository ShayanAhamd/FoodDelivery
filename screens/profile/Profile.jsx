import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "./style";
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
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.loginButtonText}>LOG IN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => navigation.navigate("Signup")}
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
