import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [dropdownHeight] = useState(new Animated.Value(0));

  // Sample notification data
  const notifications = [
    {
      id: "1",
      title: "Your order has been delivered",
      time: "10 mins ago",
      read: false,
    },
    {
      id: "2",
      title: "50% off on your favorite restaurant",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "3",
      title: "Rate your last order experience",
      time: "1 day ago",
      read: true,
    },
    {
      id: "4",
      title: "New restaurant added near you",
      time: "2 days ago",
      read: true,
    },
  ];

  const notificationCount = notifications.filter((n) => !n.read).length;

  const toggleNotifications = () => {
    if (showNotifications) {
      // Hide dropdown with animation
      Animated.timing(dropdownHeight, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => setShowNotifications(false));
    } else {
      // Show dropdown with animation
      setShowNotifications(true);
      Animated.timing(dropdownHeight, {
        toValue: Math.min(SCREEN_HEIGHT * 0.4, notifications.length * 80 + 50),
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.notificationItem,
        item.read ? styles.notificationRead : styles.notificationUnread,
      ]}
    >
      <View style={styles.notificationContent}>
        <Text
          style={[
            styles.notificationTitle,
            item.read
              ? styles.notificationTextRead
              : styles.notificationTextUnread,
          ]}
          numberOfLines={1}
        >
          {item.title}
        </Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
      {!item.read && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );

  const closeNotifications = () => {
    Animated.timing(dropdownHeight, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => setShowNotifications(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Search Bar */}
        <View style={styles.searchBarOuter}>
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="gray" />
            <TextInput placeholder="Search..." style={styles.input} />
          </View>
        </View>

        {/* Notification Bell with Badge */}
        <TouchableOpacity
          onPress={toggleNotifications}
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

      {/* Notification Dropdown */}
      {showNotifications && (
        <View style={styles.dropdownOverlay}>
          <TouchableWithoutFeedback onPress={closeNotifications}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>

          <Animated.View
            style={[styles.notificationDropdown, { height: dropdownHeight }]}
          >
            <View style={styles.notificationHeader}>
              <Text style={styles.notificationHeaderTitle}>Notifications</Text>
              {notificationCount > 0 && (
                <TouchableOpacity>
                  <Text style={styles.markAllRead}>Mark all as read</Text>
                </TouchableOpacity>
              )}
            </View>

            {notifications.length > 0 ? (
              <FlatList
                data={notifications}
                renderItem={renderNotificationItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.notificationList}
              />
            ) : (
              <View style={styles.emptyNotifications}>
                <Ionicons
                  name="notifications-off-outline"
                  size={40}
                  color="#ccc"
                />
                <Text style={styles.emptyText}>No notifications yet</Text>
              </View>
            )}
          </Animated.View>
        </View>
      )}
    </View>
  );
};

export default Header;
