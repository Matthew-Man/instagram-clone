import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Constants from 'expo-constants';

// You can import from local files
import MainTabs from "./views/MainTabs";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};
//use navigation for switching between camera mode and private/group messages
//for tab navigation, keep it as state
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainTabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <Stack.Screen name="Profile" component={HomeFeedTestProfile} options={{headerShown: false}}/>
