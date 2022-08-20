import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Intro from "./src/screens/Intro";
import Login from "./src/screens/Login";
import RegisterFinish from "./src/screens/RegisterFinish";
import RegisterAdvance from "./src/screens/RegisterAdvance";
import RegisterQuestion from "./src/screens/RegisterQuestion";
import RegisterCode from "./src/screens/RegisterCode";
import RegisterPhone from "./src/screens/RegisterPhone";
import SplashScreen from "./src/screens/SplashScreen";
import Home from "./src/screens/Home";
import More from "./src/screens/More";
import store from "./src/redux/store";
import Header from "./src/components/Header";
import TransactionHistory from "./src/screens/TransactionHistory";
import Transfer from "./src/screens/Transfer";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={More}
        name={"More"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Transfer}
        name={"Transfer"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Home}
        name={"Home"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={TransactionHistory}
        name={"TransactionHistory"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SplashScreen}
        name={"SplashScreen"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Intro}
        name={"Intro"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Login}
        name={"Login"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RegisterPhone}
        name={"RegisterPhone"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RegisterCode}
        name={"RegisterCode"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RegisterAdvance}
        name={"RegisterAdvance"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RegisterQuestion}
        name={"RegisterQuestion"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RegisterFinish}
        name={"RegisterFinish"}
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
