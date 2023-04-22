import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../screen/Details';
import { Home } from '../screen/Home';
import User from '../screen/User';
import DetailsUser from '../screen/DetailsUser';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{title: 'Home - home'}}></Stack.Screen>
          <Stack.Screen name='Details' component={Details}></Stack.Screen>
          <Stack.Screen name='User' component={User}></Stack.Screen>
          <Stack.Screen name='Details User' component={DetailsUser}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
}