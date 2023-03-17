import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../screen/Details";
import { Home } from "../screen/Home";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{title: 'Home - home'}}></Stack.Screen>
          <Stack.Screen name='Details' component={Details}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
}