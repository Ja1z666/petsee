import { View, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { Title, Block, ProfileBackground, ProfileAvatar, ProfileImg } from '../../../styles/MainStyles';
import { SettingsSvgComponent } from '../../../icons/index';
import { useNavigation } from '@react-navigation/native';

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

interface ProfileProp{
  navigation: any;
  user: {
    id: number;
    phone: string;
    bio: {
      email: string;
      name: string;
      surname: string;
    }
    posts: [
      {
        name: string;
        color: string;
        description: string;
      }
    ]
  }
}

export default function ProfileBlock({ navigation, user }:ProfileProp) {
  return (
    <Block>
        <View>
        <ProfileBackground />
        </View>
        <ProfileConteiner>
        <ProfileView>
        <ProfileAvatar>
            <ProfileImg source={require('../../../../assets/avatar.jpg')}/>
        </ProfileAvatar>
        <ProfileTitle>
            <Title style={{ paddingRight: 10}}>{user.bio ? user.bio.name : 'Name'} {user.bio ? user.bio.surname : 'Surname'}</Title>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')}>
            <SettingsSvgComponent />
            </TouchableOpacity>
        </ProfileTitle>
        </ProfileView>
        <View style={{ marginTop: 30 }}>
        <View style={{ marginBottom: 10 }}>
            <Title style={{ fontSize: 20 }}>E-mail</Title>
            <Title style={{ fontSize: 16, fontWeight: 'normal', color: '#4E4E4E' }}>{user.bio ? user.bio.email : 'none email'}</Title>
        </View>
        <View>
            <Title style={{ fontSize: 20 }}>Phone</Title>
            <Title style={{ fontSize: 16, fontWeight: 'normal', color: '#4E4E4E' }}>+{user.phone}</Title>
        </View>
        </View>
        </ProfileConteiner>
    </Block>
  );
}