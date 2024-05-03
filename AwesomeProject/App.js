import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loginpage from './components/Loginpage';
import Welcomescreen from './components/Welcomescreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Loginpage}
          options={{ headerShown: false }} // This will hide the header for the Login screen
        />
        <Stack.Screen name="Welcomescreen" component={Welcomescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
