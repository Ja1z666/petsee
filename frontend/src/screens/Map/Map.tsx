import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Display, Container, Title } from '../../styles/MainStyles';
import MapView from 'react-native-maps';

export default function Map() {
  return (
    <Display>
      <MapView style={styles.map} showsUserLocation={true} followsUserLocation={true} />
    </Display>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});