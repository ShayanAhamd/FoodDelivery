import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const categories = [
    {
      id: 1,
      name: "Burgers",
      icon: require("../../assets/burger.png"),
    },
    { id: 2, name: "Pizza", icon: require("../../assets/pizza.png") },
    { id: 3, name: "Soups", icon: require("../../assets/sandwich.png") },
    {
      id: 4,
      name: "Sandwiches",
      icon: require("../../assets/sandwich.png"),
    },
  ];

  const deals = [
    {
      id: 1,
      image: require("../../assets/burger.png"),
      name: "burger 1",
      price: "250",
    },
    {
      id: 2,
      image: require("../../assets/burger.png"),
      name: "burger 2",
      price: "750",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Banner */}
        <View style={styles.heroBanner}>
          <Image
            source={require("../../assets/pizza-banner.jpg")}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitle}>Bacon Bliss Burger</Text>
            <Text style={styles.bannerPrice}>Only for $8.00</Text>
          </View>
        </View>

        {/* Categories Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
          </View>

          <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryItem}>
                <View style={styles.categoryIconContainer}>
                  <Image source={category.icon} style={styles.categoryIcon} />
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Deals Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Deals</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dealsContainer}>
            {deals.map((deal) => (
              <TouchableOpacity key={deal.id} style={styles.dealItem}>
                <Image source={deal.image} style={styles.dealImage} />
                <Text style={styles.dealName}>{deal.name}</Text>
                <Text style={styles.dealPrice}>{deal.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FF9800",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 45,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "#000000",
  },
  notificationButton: {
    marginLeft: 15,
  },
  heroBanner: {
    position: "relative",
    height: 200,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  bannerOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  bannerPrice: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  viewAllText: {
    fontSize: 16,
    color: "#FF9800",
    fontWeight: "bold",
  },
  categoriesContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryItem: {
    alignItems: "center",
    marginBottom: 16,
    width: "22%",
  },
  categoryIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    width: 36,
    height: 36,
    // tintColor: "#FF9800",
  },
  categoryName: {
    fontSize: 14,
    textAlign: "center",
    color: "#333333",
  },
  dealsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dealItem: {
    width: "48%",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dealImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    backgroundColor: "#FFFFFF",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: "#999999",
  },
  activeNavText: {
    color: "#FF9800",
    fontWeight: "bold",
  },
  dealName: {
    fontSize: 14,
    paddingLeft: 10,
  },
  dealPrice: {
    paddingLeft: 10,
    color: "#FF9800",
    fontSize: 14,
  },
});

export default HomeScreen;
