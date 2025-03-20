import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import styles from "./style";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const categories = [
    { id: 1, name: "Soups", icon: "restaurant", type: "Ionicons" },
    { id: 2, name: "Pizza", icon: "local-pizza", type: "MaterialIcons" },
    { id: 3, name: "Burgers", icon: "hamburger", type: "FontAwesome5" },
    {
      id: 4,
      name: "Fried Chicken",
      icon: "drumstick-bite",
      type: "FontAwesome5",
    },
    {
      id: 5,
      name: "Sandwiches",
      icon: "bread-slice",
      type: "MaterialCommunityIcons",
    },
    { id: 6, name: "Hot Drinks", icon: "coffee", type: "FontAwesome5" },
    {
      id: 7,
      name: "Cold Drinks",
      icon: "glass-martini-alt",
      type: "FontAwesome5",
    },
  ];

  // Deals mapped correctly to each category
  const allDeals = {
    Burgers: [
      {
        id: 1,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCacsKFVUFTWs2O_nNZ-liKRkUT8eU8zBHQ&s",
        name: "Classic Burger",
        price: "250",
      },
      {
        id: 2,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdBZvTy7j_4VHavJJdqNHZvhjqK2jswnNtQ&s",
        name: "Cheese Burger",
        price: "750",
      },
      {
        id: 3,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdBZvTy7j_4VHavJJdqNHZvhjqK2jswnNtQ&s",
        name: "Double Cheese Burger",
        price: "1750",
      },
    ],
    Pizza: [
      {
        id: 4,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8bnpzQOP0j7G7CFRtJgdI1K2cIVbV-aZQ&s",
        name: "Pepperoni Pizza",
        price: "1200",
      },
      {
        id: 5,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqai2uMqz7lv7paTapP6BCRodFuGjP-aGCiw&s",
        name: "Margherita Pizza",
        price: "1000",
      },
      {
        id: 6,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqai2uMqz7lv7paTapP6BCRodFuGjP-aGCiw&s",
        name: "Veggie Supreme Pizza",
        price: "800",
      },
    ],
    Soups: [
      {
        id: 7,
        image:
          "https://www.washingtonpost.com/resizer/B8KyY23GAXsTnpCDIzah7xN-HAA=/arc-anglerfish-washpost-prod-washpost/public/O2ODNLW4ZBFVDBJKIU56FURJYE.jpg",
        name: "Tomato Soup",
        price: "300",
      },
      {
        id: 8,
        image:
          "https://cdn.loveandlemons.com/wp-content/uploads/2021/11/minestrone-soup-500x500.jpg",
        name: "Minestrone Soup",
        price: "400",
      },
      {
        id: 9,
        image:
          "https://cdn.loveandlemons.com/wp-content/uploads/2021/11/minestrone-soup-500x500.jpg",
        name: "Special Minestrone Soup",
        price: "600",
      },
    ],
    Sandwiches: [
      {
        id: 10,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZjpbxxYDaHOCGKff0PM2Rxn2Omn6_2CILQ&s",
        name: "Club Sandwich",
        price: "600",
      },
      {
        id: 11,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXeQzfGA95Z4wiejenHhUei9U0BxCXViK0Bg&s",
        name: "Grilled Cheese Sandwich",
        price: "450",
      },
      {
        id: 12,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXeQzfGA95Z4wiejenHhUei9U0BxCXViK0Bg&s",
        name: "Deluxe Grilled Cheese",
        price: "650",
      },
    ],
    Rice: [
      {
        id: 13,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIycguxFgTpIN3L00tYQhJ2WkypXj5w_QkQ&s",
        name: "Biryani",
        price: "800",
      },
      {
        id: 14,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPB0SshjQzi37NckUqup-HIv1ULwgFFmJExg&s",
        name: "Fried Rice",
        price: "650",
      },
      {
        id: 15,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPB0SshjQzi37NckUqup-HIv1ULwgFFmJExg&s",
        name: "Special Fried Rice",
        price: "350",
      },
    ],
  };

  const favourite = {
    Burgers: [
      {
        id: 1,
        image:
          "https://www.themealdb.com/images/media/meals/vxuyrx1511302687.jpg",
        name: "Classic Burger",
        price: "250",
      },
      {
        id: 2,
        image:
          "https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg",
        name: "Cheese Burger",
        price: "750",
      },
    ],
    Pizza: [
      {
        id: 3,
        image:
          "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
        name: "Pepperoni Pizza",
        price: "1200",
      },
      {
        id: 4,
        image:
          "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
        name: "Margherita Pizza",
        price: "1000",
      },
    ],
    Soups: [
      {
        id: 5,
        image:
          "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
        name: "Tomato Soup",
        price: "300",
      },
      {
        id: 6,
        image:
          "https://www.themealdb.com/images/media/meals/xrrtss1511815505.jpg",
        name: "Minestrone Soup",
        price: "400",
      },
    ],
    Sandwiches: [
      {
        id: 7,
        image:
          "https://www.themealdb.com/images/media/meals/xqvyqr1511638875.jpg",
        name: "Club Sandwich",
        price: "600",
      },
      {
        id: 8,
        image:
          "https://www.themealdb.com/images/media/meals/vtqxtu1511639216.jpg",
        name: "Grilled Cheese",
        price: "450",
      },
    ],
    Rice: [
      {
        id: 9,
        image: "https://www.themealdb.com/images/media/meals/1529442323.jpg",
        name: "Biryani",
        price: "800",
      },
      {
        id: 10,
        image: "https://www.themealdb.com/images/media/meals/1529444113.jpg",
        name: "Fried Rice",
        price: "650",
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("Burgers");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Banner */}
        <View style={styles.heroBanner}>
          <Image
            source={{
              uri: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
            }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitle}>Delicious Meals</Text>
            <Text style={styles.bannerPrice}>Starting from 250 Rs</Text>
          </View>
        </View>

        {/* Categories Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          >
            <View style={styles.categoriesContainer}>
              {categories.map((category) => {
                const IconComponent =
                  category.type === "Ionicons"
                    ? Ionicons
                    : category.type === "MaterialIcons"
                    ? MaterialIcons
                    : category.type === "Entypo"
                    ? Entypo
                    : FontAwesome5;

                return (
                  <TouchableOpacity
                    key={category.id}
                    style={[
                      styles.categoryItem,
                      selectedCategory === category.name
                        ? styles.selectedCategory
                        : styles.unSelectedCategory,
                    ]}
                    onPress={() => setSelectedCategory(category.name)}
                  >
                    <View
                      style={[
                        styles.categoryIconContainer,
                        selectedCategory === category.name
                          ? { backgroundColor: "#FF9800" }
                          : { backgroundColor: "#fff" },
                      ]}
                    >
                      <IconComponent
                        name={category.icon}
                        size={30}
                        color={
                          selectedCategory === category.name
                            ? "#fff"
                            : "#FF9800"
                        }
                      />
                    </View>
                    <Text style={styles.categoryName}>{category.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>

        {/* Deals Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Deals</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CategoryScreen", {
                  category: selectedCategory,
                  allDeals: allDeals,
                })
              }
            >
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.dealsContainer}>
              {allDeals[selectedCategory]?.map((deal) => (
                <TouchableOpacity
                  key={deal.id}
                  style={styles.dealItem}
                  onPress={() =>
                    navigation.navigate("DetailScreen", { item: deal })
                  }
                >
                  <Image
                    style={styles.dealImage}
                    source={{ uri: deal.image }}
                    resizeMode="cover"
                  />
                  <Text style={styles.dealName}>{deal.name}</Text>
                  <Text style={styles.dealPrice}>{deal.price} RS</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* favourite Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Favourite</Text>
          </View>

          <View style={styles.popularsContainer}>
            {Object.values(favourite)
              .flat()
              .reduce((acc, curr, index, array) => {
                if (index % 2 === 0) acc.push(array.slice(index, index + 2));
                return acc;
              }, [])
              .map((row, rowIndex) => (
                <View key={rowIndex} style={styles.favouriteRow}>
                  {row.map((favourite) => (
                    <TouchableOpacity
                      key={favourite.id}
                      style={styles.dealItem}
                    >
                      <Image
                        source={{ uri: favourite.image }}
                        style={styles.dealImage}
                        resizeMode="cover"
                      />
                      <Text style={styles.dealName}>{favourite.name}</Text>
                      <Text style={styles.dealPrice}>{favourite.price}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
