/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React from 'react';
 import {
   TouchableOpacity,
   Image
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import GalleryViewScreen from "./src/Screens/GalleryViewScreen";
 import CameraAndGalleryScreen from "./src//Screens/CameraAndGalleryScreen";
 import {createStackNavigator} from '@react-navigation/stack';
 import { SafeAreaProvider } from 'react-native-safe-area-context';
 import { GLOBAL_STYLES } from './global_styles';
 import { Provider } from 'react-redux';
 import { store, persistor } from './src/redux/index';
 import { PersistGate } from 'redux-persist/integration/react'
import { APP_LEVEL_CONSTANTS } from './AppLevelConstants';
 
 
 const Stack = createStackNavigator();
 
 const Screens = () => {
   return (
     <Stack.Navigator>
       <Stack.Screen
         name="CameraAndGalleryScreen"
         component={CameraAndGalleryScreen}
         options={{headerShown: false}}
       />
       <Stack.Screen
         name="GalleryViewScreen"
         component={GalleryViewScreen}
         options={({ navigation, route }) => ({
           headerLeft: () => (
             <TouchableOpacity
               style={GLOBAL_STYLES.top_navbar_leftButton}
               onPress={() => navigation.goBack()}
             >
               <Image source={require('./img/back_icon.png')} />
             </TouchableOpacity>
           ),
           headerTitle: APP_LEVEL_CONSTANTS.AppMainScreen.gallery
         })}
       />
     </Stack.Navigator>
   );
 };
 
 
 function App() {
     return (
       <NavigationContainer>
         <SafeAreaProvider>
           <Provider store={store}>
            <PersistGate persistor={persistor}>
              {Screens()}
             </PersistGate>
           </Provider>
         </SafeAreaProvider>
       </NavigationContainer>
     )
  }

 export default App;
 