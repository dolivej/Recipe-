import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from "./screens/auth/loginScreen"
import searchRecipeScreen from "./screens/recipes/searchRecipeScreen"
import { useFonts } from "@expo-google-fonts/inter"


const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf')
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="loginScreen" component={loginScreen} />
        <Stack.Screen name="searchRecipeScreen" component={searchRecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
