import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import NovaMissaoScreen from "../screens/NovaMissaoScreen";
import ListaMissoesScreen from "../screens/ListaMissoesScreen";
import MonitoramentoScreen from "../screens/MonitoramentoScreen";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  NovaMissao: undefined;
  ListaMissoes: undefined;
  Monitoramento: undefined;
};

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
        headerShown: false,
        }}
        >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="NovaMissao"
          component={NovaMissaoScreen}
        />

        <Stack.Screen
          name="ListaMissoes"
          component={ListaMissoesScreen}
        />

        <Stack.Screen
          name="Monitoramento"
          component={MonitoramentoScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}