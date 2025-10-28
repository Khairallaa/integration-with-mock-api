import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Import new screens
import GhibliFilmsScreen from './src/screens/GhibliFilmsScreen';
import OpenwhydSongsScreen from './src/screens/OpenwhydSongsScreen';
import AboutScreen from './src/screens/AboutScreen';

// Remove old screens and detail screen as they are not needed for the new requirement
// import MovieListScreen from './src/screens/MovieListScreen';
// import MovieDetailScreen from './src/screens/MovieDetailScreen';

export type RootTabParamList = {
  Films: undefined;
  Songs: undefined;
  About: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Films"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === 'Films') {
            iconName = focused ? 'film' : 'film-outline';
          } else if (route.name === 'Songs') {
            iconName = focused ? 'musical-notes' : 'musical-notes-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else {
            iconName = 'alert-circle';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // Hide header for cleaner look, screens have their own headers
      })}
    >
      <Tab.Screen
        name="Films"
        component={GhibliFilmsScreen}
        options={{ title: 'Ghibli Films' }}
      />
      <Tab.Screen
        name="Songs"
        component={OpenwhydSongsScreen}
        options={{ title: 'Electro Songs' }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About Me' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
