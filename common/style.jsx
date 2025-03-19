import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffb039",
    paddingHorizontal: 20,
    zIndex: 1,
  },
  notificationContainer: {
    position: "relative",
    padding: 5,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -3,
    backgroundColor: "red",
    borderRadius: 10,
    width: 16,
    height: 16,
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
    width: "90%",
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
  input: {
    flex: 1,
    marginLeft: 5,
  },
  dropdownOverlay: {
    position: "absolute",
    top: "100%",
    right: 0,
    width: "100%",
    zIndex: 100,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: -1,
  },
  notificationDropdown: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "90%",
    backgroundColor: "white",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 5,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    zIndex: 1000,
  },
  notificationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  notificationHeaderTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  markAllRead: {
    fontSize: 14,
    color: "#ffb039",
  },
  notificationList: {
    paddingBottom: 8,
  },
  notificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  notificationUnread: {
    backgroundColor: "#fff9f0",
  },
  notificationRead: {
    backgroundColor: "white",
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    marginBottom: 4,
  },
  notificationTextUnread: {
    fontWeight: "600",
  },
  notificationTextRead: {
    fontWeight: "normal",
  },
  notificationTime: {
    fontSize: 12,
    color: "#999",
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ffb039",
    marginLeft: 8,
  },
  emptyNotifications: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  emptyText: {
    marginTop: 8,
    fontSize: 14,
    color: "#999",
  },
});

export default styles;
