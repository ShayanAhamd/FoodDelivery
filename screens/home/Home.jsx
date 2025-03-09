import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const categories = [
  { id: 1, name: "Pizza", icon: "🍕" },
  { id: 2, name: "Burger", icon: "🍔" },
  { id: 3, name: "Drink", icon: "🍷" },
  { id: 4, name: "Soup", icon: "🍲" },
  { id: 5, name: "Shawarma", icon: "🌯" },
  { id: 6, name: "Fries", icon: "🍟" },
  { id: 7, name: "Pasta", icon: "🍝" },
];

const popularItems = [
  {
    id: 1,
    name: "Crown Crust Pizza",
    time: "50 min",
    price: "$12.99",
    image: require("../../assets/pizza.png"),
  },
  {
    id: 2,
    name: "Deal 01",
    time: "50 min",
    price: "$12.99",
    image: require("../../assets/deal.png"),
  },
  {
    id: 3,
    name: "Beaf Burger",
    time: "50 min",
    price: "$12.99",
    image: require("../../assets/burger.png"),
  },
  {
    id: 4,
    name: "Club Sandwich",
    time: "50 min",
    price: "$12.99",
    image: require("../../assets/sandwich.png"),
  },
  {
    id: 5,
    name: "Chicken 5 Pcs",
    time: "50 min",
    price: "$12.99",
    image: require("../../assets/fried.png"),
  },
];

const Home = () => {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
    >
      {/* Overlay with Opacity */}
      <View style={styles.overlay} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Category Section */}
          <Text style={styles.sectionTitle}>Category</Text>
          <View style={styles.categoryItemOuter}>
            <FlatList
              horizontal
              data={categories}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.categoryItem}>
                  <Text style={{ fontSize: 24 }}>{item.icon}</Text>
                  <Text style={styles.categoryText}>{item.name}</Text>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Popular Items Section */}
          <Text style={styles.sectionTitle}>Popular</Text>
          <View style={styles.popularItemsContainer}>
            {popularItems.map((item) => (
              <View key={item.id} style={styles.popularItem}>
                <Image source={item.image} style={styles.popularImage} />
                <Text style={styles.popularText}>{item.name}</Text>
                <Text style={styles.popularTime}>{item.time}</Text>
                <Text style={styles.popularPrice}>{item.price}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "white",
    opacity: 0.8,
  },
  scrollContainer: {
    paddingBottom: 50, // Ensures scrollable space
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    paddingLeft: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  categoryItemOuter: {
    marginLeft: 20,
  },
  categoryItem: {
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    width: 90,
    backgroundColor: "#F9C12C",
  },
  categoryText: {
    fontSize: 14,
    marginTop: 5,
  },
  popularItemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  popularItem: {
    width: "47%", // To ensure two items per row with spacing
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#fff",
  },
  popularImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  popularText: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
  },
  popularTime: {
    fontSize: 12,
    color: "gray",
  },
  popularPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ff9800",
  },
});

export default Home;
