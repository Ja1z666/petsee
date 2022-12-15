import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Display, Container, Title } from '../../styles/MainStyles';
import ProfileBlock from './components/Profile';
import Pet from "./components/Pet";
import * as SecureStore from 'expo-secure-store';
import { FlatList } from "react-native";

const GET_USER = gql`
  query GetUser($phone: String!){
    GetUser(input: {phone: $phone}){
      id
      phone
      bio{
        email
        name
        surname
      }
      posts{
        name
        color
        description
      }
    }
  }
`;

interface UserType{
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

export default function Profile({ navigation }:any) {
  const [phone, setPhone] = useState<string | null>(null);
  
  useEffect(() => {
    (async function(){
      setPhone(await SecureStore.getItemAsync('user'));
    })();
  }, []);

  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      phone: phone
    }
  });

  if (loading) return <Title>Loading...</Title>;
  if (error) return <Title>Error! {error.message}</Title>;

  let user:UserType = data.GetUser;

  return (
    <Display>
      <Container>
        <ProfileBlock navigation={navigation} user={user} />
        <Title style={{ marginTop: 20, marginBottom: 5, marginLeft: 15 }}>Missing pets</Title>
        <FlatList
          data={user.posts}
          renderItem={pet => (
            <Pet navigation={navigation} pet={pet.item}/>
          )}
        />
      </Container>
    </Display>
  );
}