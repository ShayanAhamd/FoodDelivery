import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Home from "./screens/home/Home";
import Orders from "./screens/orders/Orders";
import Profile from "./screens/profile/Profile";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";
import Header from "./common/Header";
import DetailScreen from "./screens/detail/DetailScreen";
import CategoryScreen from "./screens/category/CategoryScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// ✅ Home Stack with Custom Header
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      options={{
        headerShown: true,
        header: () => <Header title="Home" />,
      }}
      component={Home}
    />
    <Stack.Screen
      name="DetailScreen"
      options={{
        headerShown: true,
        header: () => <Header title="Detail" />,
      }}
      component={DetailScreen}
    />
    <Stack.Screen
      name="CategoryScreen"
      options={{
        headerShown: true,
        header: () => <Header title="Detail" />,
      }}
      component={CategoryScreen}
    />
  </Stack.Navigator>
);

// ✅ Orders Stack with Custom Header
const OrdersStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="OrdersScreen"
      options={{
        headerShown: true,
        header: () => <Header title="Orders" />,
      }}
      component={Orders}
    />
  </Stack.Navigator>
);

// ✅ Profile Stack with Login and Signup
const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileScreen"
      options={{
        headerShown: true,
        header: () => <Header title="Profile" />,
      }}
      component={Profile}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Login"
      component={Login}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Signup"
      component={Signup}
    />
  </Stack.Navigator>
);

// ✅ Bottom Tab Navigator
const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;
        if (route.name === "Home") iconName = "home";
        else if (route.name === "Orders") iconName = "list";
        else if (route.name === "Profile") iconName = "person";
        return <Ionicons name={iconName} size={17} color={color} />;
      },
      tabBarActiveTintColor: "#F9C12C",
      tabBarInactiveTintColor: "#000",
      tabBarStyle: { backgroundColor: "#f4f4f4", height: 60 },
      tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Orders" component={OrdersStack} />
    <Tab.Screen name="Profile" component={ProfileStack} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
