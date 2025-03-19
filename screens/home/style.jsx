import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
  },
  bannerPrice: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
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
    flexDirection: "row",
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  categoryItem: {
    alignItems: "center",
    marginBottom: 16,
    marginRight: 16,
  },
  categoryIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
    elevation: 5,
  },
  categoryIcon: {
    width: 36,
    height: 36,
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
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    boxShadow: "3px 2px 4px rgba(0, 0, 0, 0.3)",
    paddingBottom: 5,
    marginRight: 10,
    elevation: 5,
  },
  dealImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    resizeMode: "cover",
    backgroundColor: "#ccc",
  },
  dealName: {
    fontSize: 14,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  dealPrice: {
    paddingLeft: 10,
    color: "#FF9800",
    fontSize: 14,
  },
  favouriteRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default styles;
