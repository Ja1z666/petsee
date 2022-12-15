import { gql, useMutation } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { TextInput, TouchableOpacity } from 'react-native';
import { Display, Container, Title } from '../../styles/MainStyles';

const CREATE_PET = gql`
  mutation SendCode($number: String!){
    sendVerificationCode(options: {number: $number})
  }
`;

export default function AddPet() {
  // const [sendVerificationCode] = useMutation(CREATE_PET);

  // const create = () => {
  //   sendVerificationCode({ variables: { number } });
  // }
  
  return (
    <Display>
      <Container>
        <Title>Pet information</Title>
        <TextInput placeholder='Input name' style={{fontSize: 18, margin: 10}}></TextInput>
        <TextInput placeholder='Input description' style={{fontSize: 18, margin: 10}}></TextInput>
        <TouchableOpacity><Title style={{color: '#1d92ff'}}>Submit</Title></TouchableOpacity>
      </Container>
    </Display>
  );
}