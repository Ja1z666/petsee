import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import AddPet from './AddPet';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="AddPet" options={{ title: 'Add missing pet' }} component={AddPet} />
    </Stack.Navigator>
  );
}