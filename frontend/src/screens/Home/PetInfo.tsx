import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Display, Container, Title } from '../../styles/MainStyles';

export default function PetInfo() {
  return (
    <Display>
      <Container>
        <Title>Pet information</Title>
      </Container>
    </Display>
  );
}