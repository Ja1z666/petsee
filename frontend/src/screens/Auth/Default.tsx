import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import Verification from './Verification';

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Verification" component={Verification} />
    </Stack.Navigator>
  );
}