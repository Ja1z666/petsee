import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import PetInfo from './PetInfo';

const Stack = createStackNavigator();

export default function Map() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="PetInfo" component={PetInfo} />
    </Stack.Navigator>
  );
}