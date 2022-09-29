import { View, TouchableOpacity } from 'react-native';
import { Marker, Circle } from 'react-native-maps';
import styled from 'styled-components/native';

const AvatarBackground = styled.View`
    width: 50px;
    height: 50px;
    background: #FFFFFF;
    border: 0.5px solid #F2F2F2;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
`;

const Avatar = styled.Image`
    width: 44px;
    height: 44px;
    border-radius: 100px;
`;

type PetMarkerProp = {
    navigation: any;
    pet: {
        id: number;
        latitude: number;
        longitude: number;
    }
}

export default function PetMarker({navigation, pet}:PetMarkerProp) {  

    return (
        <View>
            <Circle
                center={{ latitude: pet.latitude , longitude: pet.longitude }}
                radius={200}
                strokeColor='#16DB65'
                strokeWidth={2}
                fillColor='rgba(22, 219, 101, 0.3)'
            />
            <Marker coordinate={{ latitude: pet.latitude , longitude: pet.longitude }}>
                <TouchableOpacity onPress={() => navigation.navigate('PetInfo')}>
                    <AvatarBackground>
                        <Avatar source={require(`../../assets/pakkun.jpg`)} />
                    </AvatarBackground>
                </TouchableOpacity>
            </Marker>
        </View>
    );
}