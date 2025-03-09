import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const notificationCount = 3;
  return (
    <View style={styles.header}>
      {/* Title (Center) */}

      {/* Search Bar */}
      <View style={styles.searchBarOuter}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="gray" />
          <TextInput placeholder="Search..." style={styles.input} />
        </View>
      </View>

      {/* Notification Bell with Badge (Right) */}
      <TouchableOpacity
        onPress={() => alert("Notifications")}
        style={styles.notificationContainer}
      >
        <Ionicons name="notifications" size={25} color="#000" />
        {notificationCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffb039",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 22,
  },
  notificationContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -3,
    backgroundColor: "red",
    borderRadius: 10,
    width: 13,
    height: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  searchBarOuter: {
    paddingRight: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 20,
    marginVertical: 10,
  },
});

export default Header;
