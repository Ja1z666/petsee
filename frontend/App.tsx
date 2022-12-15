import { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Map, Profile } from './src/screens/index';
import { HomeSvgComponent, MapSvgComponent, ProfileSvgComponent } from './src/icons/index';
import { ButtonBlock, Title } from './src/styles/TopBarStyles';
import { ApolloProvider } from '@apollo/client';
import { Auth } from './src/screens/index';
import * as SecureStore from 'expo-secure-store';
import { client } from './apollo';

const Tab = createBottomTabNavigator();


export default function App() {
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    (async function(){
      setUser(await SecureStore.getItemAsync('user'));
    })();
  }, []);

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {user ? (
          <Tab.Navigator
            screenOptions={() => ({
              tabBarStyle: {
                backgroundColor: '#16DB65',
                height: 110,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                position: 'absolute',
                shadowOpacity: 0.25,
                shadowRadius: 20,
                shadowOffset: {
                  width: 0,
                  height: -6,
                },
              },
              tabBarActiveTintColor: '#ffffff',
              tabBarInactiveTintColor: '#ffffff',
              headerShown: false,
              tabBarShowLabel: false
            })}
          >
            <Tab.Screen name="Home" component={Home}
              options={{
                tabBarIcon: ({ focused }) => (
                  <ButtonBlock>
                    <HomeSvgComponent />
                    <Title style={{ display: focused ? 'flex' : 'none' }}>Home</Title>
                  </ButtonBlock>
                )
              }}
            />
            <Tab.Screen name="Map" component={Map}
              options={{
                tabBarIcon: ({ focused }) => (
                  <ButtonBlock>
                    <MapSvgComponent />
                    <Title style={{ display: focused ? 'flex' : 'none' }}>Map</Title>
                  </ButtonBlock>
                )
              }}
            />
            <Tab.Screen name="Profile" component={Profile}
              options={{
                tabBarIcon: ({ focused }) => (
                  <ButtonBlock>
                    <ProfileSvgComponent />
                    <Title style={{ display: focused ? 'flex' : 'none' }}>Profile</Title>
                  </ButtonBlock>
                )
              }}
            />
          </Tab.Navigator>
          ) : (
            <Auth />
          )
        }
      </NavigationContainer>
    </ApolloProvider>
  );
}