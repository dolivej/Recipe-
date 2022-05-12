import { StyleSheet } from 'react-native';
import React, {useEffect, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import initialScreen from "./screens/auth/initialScreen";
import registerScreen from './screens/auth/registerScreen';
import loginScreen from './screens/auth/loginScreen';
import resetScreen from './screens/auth/resetScreen';
import introScreen from './screens/onboarding/introScreen';
import goalSettingScreen from './screens/onboarding/goalSettingScreen';
import goalReviewScreen from './screens/onboarding/goalReviewScreen';
import finalScreen from './screens/onboarding/finalScreen';
import searchRecipeScreen from "./screens/recipes/searchRecipeScreen";

import { useFonts } from "@expo-google-fonts/inter"
import AppLoading from 'expo-app-loading';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext, AuthProvider} from './providers/authProvider';
import {auth, onAuthStateChanged} from './services/firebase'
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

function UnwrappedApp() {
  const {
    user,
    setUser,
    setUserAsync,
    removeUserAsync,
  } = useContext(AuthContext);

  useEffect(() => {
    // GoogleSignin.configure({
    //   webClientId:
    //     '394408075125-c9bno4ujsh7g4sombgi0i6b595v3jitv.apps.googleusercontent.com',
    // });
 
    AsyncStorage.getItem('user').then((userString) => {
      if (userString) {
        setUser(JSON.parse(userString));
      }
    });

    const subscriber = onAuthStateChanged(auth, user => {
      setUser(user);
      if (user && user.uid != null){
          setUserAsync(user);
      }else{
          removeUserAsync();
      }
    })

    return subscriber
  },[auth]);
  
  let [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
      <NavigationContainer>
        <Stack.Navigator>
          {!user &&  <Stack.Screen options={{headerShown: false}} name="initialScreen" component={initialScreen} />}
          {!user &&  <Stack.Screen options={{headerShown: false}} name="registerScreen" component={registerScreen} />}
          {!user &&  <Stack.Screen options={{headerShown: false}} name="loginScreen" component={loginScreen} />}
          {!user &&  <Stack.Screen options={{headerShown: false}} name="resetScreen" component={resetScreen} />}
          {user && <Stack.Screen options={{headerShown: false}} name="introScreen" component={introScreen} />}
          {user && <Stack.Screen options={{headerShown: false}} name="goalSettingScreen" component={goalSettingScreen} />}
          {user && <Stack.Screen options={{headerShown: false}} name="goalReviewScreen" component={goalReviewScreen} />}
          {user && <Stack.Screen options={{headerShown: false}} name="finalScreen" component={finalScreen} />}
          {user && <Stack.Screen name="searchRecipeScreen" component={searchRecipeScreen} />}
        </Stack.Navigator>
      </NavigationContainer>
  );
}


export default function App() {
  return (
    <AuthProvider>
      <UnwrappedApp/>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
