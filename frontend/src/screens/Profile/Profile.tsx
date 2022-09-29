import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import ProfileEdit from './ProfileEdit';

const Stack = createStackNavigator();

export default function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
    </Stack.Navigator>
  );
}