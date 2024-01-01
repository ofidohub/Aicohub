// Importing necessary modules and components
import React, { useEffect } from 'react';
import * as Linking from 'expo-linking';
import { Asset } from 'expo-asset';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Brightness from 'expo-brightness';
import PagerView from 'react-native-pager-view';
import HeaderTitle from './components/HeaderTitle';
import HomeScreen from './screen/HomeScreen';

// Creating the bottom tab navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tab navigator component
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="home" size={size} color={focused ? 'blue' : 'gray'} />
          ),
        }}
      />
      {/* Other Tab.Screen components */}
    </Tab.Navigator>
  );
}

// Main App component
export default function App() {
  // Requesting brightness permission and setting brightness to maximum on component mount
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(1);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{
            headerTitle: () => <HeaderTitle title="AICOHUB" />,
          }}
        />
        {/* Other Stack.Screen components */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Other screen components...