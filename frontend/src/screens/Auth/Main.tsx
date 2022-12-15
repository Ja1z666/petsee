import {useState } from 'react';
import { Display, Container, Title, ButtonText } from '../../styles/MainStyles';
import { AuthBlock, InputNumber, SubmitButton } from '../../styles/AuthStyles';
import { gql, useMutation } from '@apollo/client';

const SEND_CODE = gql`
  mutation SendCode($number: String!){
    sendVerificationCode(options: {number: $number})
  }
`;

export default function Main({ navigation }:any) {
  const [number, setNumber] = useState<string>('');
  const [sendVerificationCode] = useMutation(SEND_CODE, {
    onCompleted: data => {
      if(data.sendVerificationCode === 200) navigation.navigate('Verification', {
        phoneNumber: number
      });
    }
  });

  const sendCode = () => {
    if(number == '') return alert("Please input number");
    sendVerificationCode({ variables: { number } });
  }

  return (
    <Display>
      <Container>
        <AuthBlock>
          <Title>Please input number</Title>
          <InputNumber placeholder="371 2349 9531" keyboardType="numeric" value={number} onChangeText={(number:string) => setNumber(number)}/>
          <SubmitButton onPress={sendCode}><ButtonText>Submit</ButtonText></SubmitButton>
        </AuthBlock>
      </Container>
    </Display>
  );
}