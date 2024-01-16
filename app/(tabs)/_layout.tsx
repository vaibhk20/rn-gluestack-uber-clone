import { Tabs } from "expo-router";
import { Icon } from "@gluestack-ui/themed";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import {
  AccountIcon,
  ActivityIcon,
  HomeIcon,
  ServicesIcon,
} from "../../assets/icons/TabIcons";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon
              as={HomeIcon}
              color={color}
              sx={{
                width: 32,
                height: 32,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="resultsScreen"
        options={{
          title: "Services",
          tabBarIcon: ({ color }) => (
            <Icon
              as={ServicesIcon}
              color={color}
              sx={{
                width: 32,
                height: 32,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ActivityScreen"
        options={{
          title: "Activity",
          tabBarIcon: ({ color }) => (
            <Icon
              as={ActivityIcon}
              color={color}
              sx={{
                width: 32,
                height: 32,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="AccountScreen"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <Icon
              as={AccountIcon}
              color={color}
              sx={{
                width: 32,
                height: 32,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
