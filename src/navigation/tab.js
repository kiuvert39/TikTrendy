import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";
import ProfileScreen from "../screens/ProfileScreen";
import navigationStyle from "../styles/navigation.style";
import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          ...navigationStyle.mainBox,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons
                  name="home"
                  color={focused ? "#16247d" : "#111"}
                  size={24}
                />
                <Text>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="plus"
        component={AddScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={navigationStyle.plus}>
                <AntDesign name="plus" size={40} color="black" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons
                  name="account"
                  color={focused ? "#16247d" : "#111"}
                  size={24}
                />
                <Text>account</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
