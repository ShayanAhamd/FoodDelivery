import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const CategoryScreen = ({ route, navigation }) => {
  const { category, allDeals } = route.params;
  const categoryItems = allDeals[category] || [];

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{category}</Text>
      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="filter" size={22} color="#333" />
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.dealItem,
        index % 2 === 0 ? { marginRight: 8 } : { marginLeft: 8 },
      ]}
      onPress={() => navigation.navigate("DetailScreen", { item })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.dealImage} />
        {item.discount && (
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>{item.discount}% OFF</Text>
          </View>
        )}
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={18} color="#666" />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.dealName} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.restaurantName} numberOfLines={1}>
          {item.restaurant}
        </Text>
        <View style={styles.priceRow}>
          <Text style={styles.dealPrice}>
            ${parseFloat(item.price).toFixed(2)}
          </Text>
          {item.originalPrice && (
            <Text style={styles.originalPrice}>
              ${parseFloat(item.originalPrice).toFixed(2)}
            </Text>
          )}
        </View>
        <View style={styles.bottomRow}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={12} color="#FFB64B" />
            <Text style={styles.ratingText}>
              {item.rating || "4.8"}{" "}
              <Text style={styles.ratingCount}>
                ({item.ratingCount || "50+"})
              </Text>
            </Text>
          </View>
          <View style={styles.timeContainer}>
            <Ionicons name="time-outline" size={12} color="#666" />
            <Text style={styles.timeText}>{item.deliveryTime || "25-35"}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <MaterialIcons name="fastfood" size={60} color="#ccc" />
      <Text style={styles.emptyText}>No items found in this category</Text>
      <TouchableOpacity
        style={styles.browseButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.browseButtonText}>Browse Other Categories</Text>
      </TouchableOpacity>
    </View>
  );

  const renderFilters = () => (
    <View style={styles.filtersContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={[styles.filterChip, styles.activeFilterChip]}>
          <Text style={[styles.filterChipText, styles.activeFilterChipText]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterChip}>
          <Text style={styles.filterChipText}>Price: Low to High</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterChip}>
          <Text style={styles.filterChipText}>Price: High to Low</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterChip}>
          <Text style={styles.filterChipText}>Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterChip}>
          <Text style={styles.filterChipText}>Delivery Time</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {renderHeader()}
        {categoryItems.length > 0 && renderFilters()}
        <FlatList
          data={categoryItems}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={renderItem}
          ListEmptyComponent={renderEmptyList}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    flex: 1,
    textAlign: "center",
  },
  filterButton: {
    padding: 8,
  },
  filtersContainer: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#f0f0f0",
  },
  activeFilterChip: {
    backgroundColor: "#FFB64B",
  },
  filterChipText: {
    fontSize: 13,
    color: "#666",
  },
  activeFilterChipText: {
    color: "#fff",
    fontWeight: "600",
  },
  listContainer: {
    padding: 12,
  },
  dealItem: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    flex: 1,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imageContainer: {
    position: "relative",
    height: 140,
  },
  dealImage: {
    width: "100%",
    height: "100%",
  },
  discountTag: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#FFB64B",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  infoContainer: {
    padding: 12,
  },
  dealName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
    height: 40,
  },
  restaurantName: {
    fontSize: 12,
    color: "#666",
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  dealPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFB64B",
    marginRight: 6,
  },
  originalPrice: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "line-through",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#333",
    marginLeft: 4,
  },
  ratingCount: {
    fontSize: 11,
    color: "#666",
    fontWeight: "normal",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    fontSize: 11,
    color: "#666",
    marginLeft: 4,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    marginTop: 16,
    marginBottom: 24,
  },
  browseButton: {
    backgroundColor: "#FFB64B",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  browseButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
