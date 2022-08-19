import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Intro from "./src/screens/Intro";
import Login from "./src/screens/Login";
import RegisterCode from "./src/screens/RegisterCode";
import RegisterPhone from "./src/screens/RegisterPhone";
import SplashScreen from "./src/screens/SplashScreen";
import store from "./src/redux/store";
import Header from "./src/components/Header";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={RegisterCode}
        name={"RegisterCode"}
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={RegisterPhone}
        name={"RegisterPhone"}
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={Login}
        name={"Login"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Intro}
        name={"Intro"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SplashScreen}
        name={"SplashScreen"}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
