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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// ✅ Home Stack with Custom Header
const HomeStack = ({ navigation }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="HomeScreen"
      options={{
        headerShown: true,
        header: () => <Header navigation={navigation} title="Home" />,
      }}
      component={Home}
    />
  </Stack.Navigator>
);

// ✅ Orders Stack with Custom Header
const OrdersStack = ({ navigation }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="OrdersScreen"
      options={{
        headerShown: true,
        header: () => <Header navigation={navigation} title="Orders" />,
      }}
      component={Orders}
    />
  </Stack.Navigator>
);

// ✅ Profile Stack with Login and Signup
const ProfileStack = ({ navigation }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="ProfileScreen"
      options={{
        headerShown: true,
        header: () => <Header navigation={navigation} title="Profile" />,
      }}
      component={Profile}
    />
    <Stack.Screen
      name="Login"
      options={{
        headerShown: true,
        header: () => <Header navigation={navigation} title="Login" />,
      }}
      component={Login}
    />
    <Stack.Screen
      name="SignupScreen"
      options={{
        headerShown: true,
        header: () => <Header navigation={navigation} title="Signup" />,
      }}
      component={Signup}
    />
  </Stack.Navigator>
);

// ✅ Bottom Tab Navigator
const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Home") iconName = "home";
        else if (route.name === "Orders") iconName = "list";
        else if (route.name === "Profile") iconName = "person";
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#F9C12C",
      tabBarInactiveTintColor: "#000",
      tabBarStyle: { backgroundColor: "#f4f4f4", height: 60 },
      tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
      headerShown: false, // Hide default headers
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
