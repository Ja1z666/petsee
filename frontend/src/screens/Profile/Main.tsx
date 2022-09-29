import { View, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { Display, Container, Title, Block, ProfileBackground, ProfileAvatar, ProfileImg } from '../../styles/MainStyles';
import { SettingsSvgComponent } from '../../icons/index';

const ProfileView = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

const ProfileConteiner = styled.View`
  padding: 10px;
`;

const ProfileTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default function Profile({ navigation }:any) {
  return (
    <Display>
      <Container>
        <Block>
          <View>
            <ProfileBackground />
          </View>
          <ProfileConteiner>
          <ProfileView>
            <ProfileAvatar>
              <ProfileImg source={require('../../../assets/avatar.jpg')}/>
            </ProfileAvatar>
            <ProfileTitle>
              <Title style={{ paddingRight: 10}}>Mihails Pavlovs</Title>
              <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')}>
                <SettingsSvgComponent />
              </TouchableOpacity>
            </ProfileTitle>
          </ProfileView>
          <View style={{ marginTop: 30 }}>
            <View style={{ marginBottom: 10 }}>
              <Title style={{ fontSize: 20 }}>E-mail</Title>
              <Title style={{ fontSize: 16, fontWeight: 'normal', color: '#4E4E4E' }}>mishaenderman2003@gmail.com</Title>
            </View>
            <View>
              <Title style={{ fontSize: 20 }}>Phone</Title>
              <Title style={{ fontSize: 16, fontWeight: 'normal', color: '#4E4E4E' }}>+371 23994521</Title>
            </View>
          </View>
          </ProfileConteiner>
        </Block>
        <Title style={{ marginTop: 20, marginBottom: 5, marginLeft: 15 }}>Missing pets</Title>
        <Block style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
          <Title style={{ fontSize: 16, fontWeight: 'normal', color: '#4E4E4E' }}>Empty</Title>
        </Block>
      </Container>
    </Display>
  );
}