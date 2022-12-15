import { useContext, useState } from 'react';
import { Display, Container, Title, ButtonText } from '../../styles/MainStyles';
import { AuthBlock, InputCode, SubmitButton } from '../../styles/AuthStyles';
import { gql, useMutation } from '@apollo/client';
import { NativeModules } from "react-native";
import * as SecureStore from 'expo-secure-store';

const CHECK_CODE = gql`
  mutation CheckCode($number: String!, $code: String!){
    chekVerificationCode(options: {number: $number, code: $code})
  }
`;

export default function Verification({ route }:any) {
  const [code, setCode] = useState<string>('');
  const { phoneNumber } = route.params;

  const [chekVerificationCode] = useMutation(CHECK_CODE, {
    onCompleted: async data => {
      if(data.chekVerificationCode === 400) alert("Incorrect code");
      else if(data.chekVerificationCode === 200) {
        await SecureStore.setItemAsync("user", phoneNumber);
        NativeModules.DevSettings.reload();
      }
    }
  });

  const verifyCode = async () => {
    if(code == '') return alert("Please input code");
    chekVerificationCode({ variables: { number: phoneNumber, code } });
  }

  return (
    <Display>
      <Container>
        <AuthBlock>
          <Title>Please inpute code from message</Title>
          <InputCode placeholder="634345" keyboardType="numeric" maxLength={6} value={code} onChangeText={(code:string) => setCode(code)}/>
          <SubmitButton onPress={verifyCode}><ButtonText>Submit</ButtonText></SubmitButton>
        </AuthBlock>
      </Container>
    </Display>
  );
}