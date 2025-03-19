import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";

const OrdersScreen = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  // Sample data for orders
  const ongoingOrders = [
    {
      id: "1",
      restaurant: "Burger King",
      orderNumber: "#BK-1234",
      time: "15 min",
      status: "On the way",
      items: "1x Whopper, 1x Medium Fries",
      price: "$12.99",
      date: "Today, 12:30 PM",
    },
  ];

  const pastOrders = [
    {
      id: "2",
      restaurant: "Pizza Hut",
      orderNumber: "#PH-5678",
      status: "Delivered",
      items: "1x Large Pepperoni Pizza, 1x Garlic Bread",
      price: "$18.50",
      date: "Yesterday, 7:45 PM",
    },
    {
      id: "3",
      restaurant: "Subway",
      orderNumber: "#SW-9012",
      status: "Delivered",
      items: "1x Footlong Italian BMT, 1x Cookie",
      price: "$11.25",
      date: "Mar 8, 2025, 1:15 PM",
    },
    {
      id: "4",
      restaurant: "KFC",
      orderNumber: "#KFC-3456",
      status: "Delivered",
      items: "1x 2pc Chicken Meal, 1x Coleslaw",
      price: "$9.99",
      date: "Mar 5, 2025, 6:30 PM",
    },
  ];

  const renderOrderItem = ({ item, ongoing = false }) => (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <View style={styles.restaurantContainer}>
          <View style={styles.restaurantLogoContainer}>
            <View style={styles.restaurantLogo}></View>
          </View>
          <View>
            <Text style={styles.restaurantName}>{item.restaurant}</Text>
            <Text style={styles.orderNumber}>{item.orderNumber}</Text>
          </View>
        </View>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: ongoing ? "#e6f2ff" : "#f1f1f1" },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              { color: ongoing ? "#0066cc" : "#555555" },
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>

      <View style={styles.orderDetails}>
        <Text style={styles.itemsText} numberOfLines={1}>
          {item.items}
        </Text>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>

      <View style={styles.orderFooter}>
        <Text style={styles.dateText}>{item.date}</Text>

        {ongoing ? (
          <View style={styles.deliveryInfo}>
            <Text style={styles.timeText}>Arriving in {item.time}</Text>
            <TouchableOpacity style={styles.trackButton}>
              <Text style={styles.trackButtonText}>Track Order</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.reorderButton}>
            <Text style={styles.reorderButtonText}>Reorder</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const EmptyOrdersView = ({ type }) => (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyImagePlaceholder}></View>
      <Text style={styles.emptyTitle}>
        {type === "ongoing" ? "No ongoing orders" : "No order history"}
      </Text>
      <Text style={styles.emptySubtitle}>
        {type === "ongoing"
          ? "Your ongoing orders will appear here"
          : "When you place orders, they will appear here"}
      </Text>
      <TouchableOpacity style={styles.browseButton}>
        <Text style={styles.browseButtonText}>Browse Restaurants</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FF9800" barStyle="light-content" />
      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "ongoing" && styles.activeTab]}
          onPress={() => setActiveTab("ongoing")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "ongoing" && styles.activeTabText,
            ]}
          >
            Ongoing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "history" && styles.activeTab]}
          onPress={() => setActiveTab("history")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "history" && styles.activeTabText,
            ]}
          >
            History
          </Text>
        </TouchableOpacity>
      </View>

      {/* Order Lists */}
      <ScrollView style={styles.contentContainer}>
        {activeTab === "ongoing" ? (
          ongoingOrders.length > 0 ? (
            ongoingOrders.map((order) => (
              <View key={order.id}>
                {renderOrderItem({ item: order, ongoing: true })}
              </View>
            ))
          ) : (
            <EmptyOrdersView type="ongoing" />
          )
        ) : pastOrders.length > 0 ? (
          pastOrders.map((order) => (
            <View key={order.id}>{renderOrderItem({ item: order })}</View>
          ))
        ) : (
          <EmptyOrdersView type="history" />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    backgroundColor: "#FF9800",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#FF9800",
  },
  tabText: {
    fontSize: 16,
    color: "#777777",
  },
  activeTabText: {
    color: "#FF9800",
    fontWeight: "600",
  },
  contentContainer: {
    flex: 1,
  },
  orderCard: {
    backgroundColor: "white",
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 8,
    padding: 15,
    elevation: 2,
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  restaurantContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantLogoContainer: {
    marginRight: 10,
  },
  restaurantLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f1f1f1",
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "600",
  },
  orderNumber: {
    fontSize: 14,
    color: "#777777",
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "500",
  },
  orderDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
  },
  itemsText: {
    fontSize: 14,
    color: "#555555",
    flex: 1,
  },
  priceText: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 5,
  },
  orderFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontSize: 13,
    color: "#777777",
  },
  deliveryInfo: {
    alignItems: "flex-end",
  },
  timeText: {
    fontSize: 13,
    color: "#FF9800",
    fontWeight: "500",
    marginBottom: 5,
  },
  trackButton: {
    backgroundColor: "#FF9800",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  trackButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  reorderButton: {
    borderWidth: 1,
    borderColor: "#FF9800",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
  },
  reorderButtonText: {
    color: "#FF9800",
    fontSize: 12,
    fontWeight: "500",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  emptyImagePlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: "#f1f1f1",
    borderRadius: 60,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    marginBottom: 25,
  },
  browseButton: {
    backgroundColor: "#FF9800",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  browseButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default OrdersScreen;
