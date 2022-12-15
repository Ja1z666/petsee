import { View, StyleSheet } from 'react-native';
import { Title, Block, Text, PetBlock, PetColor } from '../../../styles/MainStyles';

interface ProfileProp{
  navigation: any;
  pet: {
    name: string;
    color: string;
    description: string;
  }
}

export default function Pet({ navigation, pet }:ProfileProp) {
  return (
    <Block>
      <PetBlock>
        <View>
          <PetColor style={{backgroundColor: `${pet.color}`}}/>
        </View>
        <View>
          <Title>{pet.name}</Title>
          <Text>{pet.description}</Text>
        </View>
      </PetBlock>
    </Block>
  );
}