import { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Display } from '../../styles/MainStyles';
import MapView from 'react-native-maps';
import PetMarker from '../../components/PetMarker';

export default function Map({ navigation }:any) {
  const [followsUserLocation, setFollowsUserLocation] = useState(true);
  const [pets, setPets] = useState([
    {
        id: 1,
        latitude : 57.021999,
        longitude : 24.135289
    },
    {
        id: 2,
        latitude : 56.965069,
        longitude : 24.102490
    },
    {
        id: 3,
        latitude : 56.942216,
        longitude : 24.200093
    }
  ]);

  return (
    <Display>
        <MapView
            style={styles.map}
            mapPadding={{ left: 0, top: 0, right: 0, bottom: 20 }}
            followsUserLocation={followsUserLocation}
            showsMyLocationButton={true}
            onRegionChangeComplete={() => setFollowsUserLocation(false)}
        >
            {pets.map((pet) => (
                <PetMarker key={pet.id} navigation={navigation} pet={pet} />
            ))}
        </MapView>
    </Display>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 90,
  },
});