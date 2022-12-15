import { TouchableOpacity } from 'react-native';
import { Display, Container, Title } from '../../styles/MainStyles';

export default function Main({ navigation }:any) {
  return (
    <Display>
      <Container>
        <Title>Home</Title>
        <TouchableOpacity onPress={() => navigation.navigate('AddPet')}>
          <Title style={{color: '#1d92ff'}}>Add missing pet</Title>
        </TouchableOpacity>
      </Container>
    </Display>
  );
}