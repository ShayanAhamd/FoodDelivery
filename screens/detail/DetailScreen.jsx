import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [showNutrition, setShowNutrition] = useState(false);

  // Sample variants and addons (these would come from the API in a real app)
  const variants = item.variants || [
    { name: "Regular", price: 0 },
    { name: "Large", price: 2.5 },
  ];

  const addons = item.addons || [
    { id: 1, name: "Extra Cheese", price: 1.5 },
    { id: 2, name: "Jalapeños", price: 0.75 },
    { id: 3, name: "Garlic Sauce", price: 0.5 },
  ];

  // Increase or decrease quantity
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Toggle addon selection
  const toggleAddon = (addon) => {
    if (selectedAddons.find((a) => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  // Calculate total price
  const calculateTotal = () => {
    let total = parseFloat(item.price);
    if (selectedVariant) {
      total += selectedVariant.price;
    }
    selectedAddons.forEach((addon) => {
      total += addon.price;
    });
    return (total * quantity).toFixed(2);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Food Image with Header */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.headerOverlay}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={16} color="white" />
            </TouchableOpacity>
            <View style={styles.headerRightButtons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="share-social-outline" size={16} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="heart-outline" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Food Details */}
        <View style={styles.detailsContainer}>
          {/* Restaurant and Rating */}
          <View style={styles.restaurantRow}>
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{item.restaurant}</Text>
              <View style={styles.ratingContainer}>
                <AntDesign name="star" size={16} color="#FFCC00" />
                <Text style={styles.ratingText}>4.8</Text>
                <Text style={styles.ratingCount}>(200+)</Text>
              </View>
            </View>
            <View style={styles.deliveryInfo}>
              <View style={styles.deliveryTimeContainer}>
                <Ionicons name="time-outline" size={14} color="#666" />
                <Text style={styles.deliveryTimeText}>25-35 min</Text>
              </View>
            </View>
          </View>

          {/* Item Name and Description */}
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${parseFloat(item.price).toFixed(2)}</Text>
          <Text style={styles.description}>
            {item.description ||
              "Delicious food made with fresh, high-quality ingredients. A perfect choice for any meal."}
          </Text>

          {/* Nutrition Info Toggle */}
          <TouchableOpacity
            style={styles.nutritionToggle}
            onPress={() => setShowNutrition(!showNutrition)}
          >
            <Text style={styles.nutritionToggleText}>
              Nutrition Information
            </Text>
            <MaterialIcons
              name={showNutrition ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={24}
              color="#FFB64B"
            />
          </TouchableOpacity>

          {showNutrition && (
            <View style={styles.nutritionInfo}>
              <View style={styles.nutritionItem}>
                <Text style={styles.nutritionLabel}>Calories</Text>
                <Text style={styles.nutritionValue}>540 kcal</Text>
              </View>
              <View style={styles.nutritionItem}>
                <Text style={styles.nutritionLabel}>Protein</Text>
                <Text style={styles.nutritionValue}>24g</Text>
              </View>
              <View style={styles.nutritionItem}>
                <Text style={styles.nutritionLabel}>Carbs</Text>
                <Text style={styles.nutritionValue}>68g</Text>
              </View>
              <View style={styles.nutritionItem}>
                <Text style={styles.nutritionLabel}>Fat</Text>
                <Text style={styles.nutritionValue}>22g</Text>
              </View>
            </View>
          )}

          {/* Variants Section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Size Options</Text>
            <View style={styles.variantsContainer}>
              {variants.map((variant, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.variantItem,
                    selectedVariant === variant && styles.variantItemSelected,
                  ]}
                  onPress={() => setSelectedVariant(variant)}
                >
                  <Text
                    style={[
                      styles.variantName,
                      selectedVariant === variant && styles.variantNameSelected,
                    ]}
                  >
                    {variant.name}
                  </Text>
                  {variant.price > 0 && (
                    <Text
                      style={[
                        styles.variantPrice,
                        selectedVariant === variant &&
                          styles.variantPriceSelected,
                      ]}
                    >
                      +${variant.price.toFixed(2)}
                    </Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Add-ons Section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Add-ons</Text>
            <View style={styles.addonsContainer}>
              {addons.map((addon) => (
                <TouchableOpacity
                  key={addon.id}
                  style={styles.addonItem}
                  onPress={() => toggleAddon(addon)}
                >
                  <View style={styles.addonCheckbox}>
                    {selectedAddons.find((a) => a.id === addon.id) ? (
                      <Ionicons
                        name="checkmark-circle"
                        size={24}
                        color="#FFB64B"
                      />
                    ) : (
                      <Ionicons name="ellipse-outline" size={24} color="#ccc" />
                    )}
                  </View>
                  <View style={styles.addonInfo}>
                    <Text style={styles.addonName}>{addon.name}</Text>
                    <Text style={styles.addonPrice}>
                      +${addon.price.toFixed(2)}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Special Instructions */}
          <View style={styles.specialInstructionsContainer}>
            <Text style={styles.sectionTitle}>Special Instructions</Text>
            <TouchableOpacity style={styles.specialInstructionsButton}>
              <Ionicons name="create-outline" size={20} color="#666" />
              <Text style={styles.specialInstructionsText}>
                Add note (allergies, preferences, etc.)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar with Quantity and Add to Cart */}
      <View style={styles.bottomBar}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={decreaseQuantity}
            style={styles.quantityButton}
          >
            <AntDesign
              name="minus"
              size={18}
              color={quantity > 1 ? "#FFB64B" : "#ccc"}
            />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={increaseQuantity}
            style={styles.quantityButton}
          >
            <AntDesign name="plus" size={18} color="#FFB64B" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>
            Add to Cart - ${calculateTotal()}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    position: "relative",
    height: 280,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  backButton: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 8,
    borderRadius: 50,
  },
  headerRightButtons: {
    flexDirection: "row",
  },
  iconButton: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 8,
    borderRadius: 50,
    marginLeft: 10,
  },
  detailsContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  restaurantRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  restaurantInfo: {
    flexDirection: "column",
  },
  restaurantName: {
    fontSize: 14,
    color: "#FFB64B",
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 4,
    color: "#333",
  },
  ratingCount: {
    fontSize: 12,
    color: "#666",
    marginLeft: 2,
  },
  deliveryInfo: {
    alignItems: "flex-end",
  },
  deliveryTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  deliveryTimeText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFB64B",
    marginTop: 8,
  },
  description: {
    fontSize: 15,
    color: "#666",
    marginTop: 12,
    lineHeight: 22,
  },
  nutritionToggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  nutritionToggleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFB64B",
  },
  nutritionInfo: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  nutritionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  nutritionLabel: {
    fontSize: 14,
    color: "#666",
  },
  nutritionValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  sectionContainer: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#333",
  },
  variantsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  variantItem: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
    marginBottom: 12,
    minWidth: 100,
  },
  variantItemSelected: {
    borderColor: "#FFB64B",
    backgroundColor: "rgba(214, 6, 101, 0.05)",
  },
  variantName: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  variantNameSelected: {
    color: "#FFB64B",
    fontWeight: "600",
  },
  variantPrice: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  variantPriceSelected: {
    color: "#FFB64B",
  },
  addonsContainer: {
    marginTop: 8,
  },
  addonItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  addonCheckbox: {
    marginRight: 12,
  },
  addonInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addonName: {
    fontSize: 15,
    color: "#333",
  },
  addonPrice: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  specialInstructionsContainer: {
    marginTop: 24,
  },
  specialInstructionsButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  specialInstructionsText: {
    marginLeft: 10,
    color: "#666",
    fontSize: 14,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 4,
  },
  quantityButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    width: 30,
    textAlign: "center",
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: "#FFB64B",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
