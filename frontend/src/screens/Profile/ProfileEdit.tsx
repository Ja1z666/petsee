import { View, TouchableOpacity } from 'react-native';
import { Display, Container, Title, Block, ProfileBackground, ProfileAvatar, ProfileImg } from '../../styles/MainStyles';
import * as SecureStore from 'expo-secure-store';
import { NativeModules } from "react-native";

export default function ProfileEdit() {
  const logout = async () => {
    SecureStore.deleteItemAsync("user");
    NativeModules.DevSettings.reload();
  }

  return (
    <Display>
      <Container>
        <Title>Edit</Title>
        <TouchableOpacity onPress={logout}><Title>Logout</Title></TouchableOpacity>
      </Container>
    </Display>
  );
}