import styled from "styled-components/native";

export const Display = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

export const Container = styled.View`
    margin: 50px 20px;
`;

export const Title = styled.Text`
    color: #000000;
    font-size: 24px;
    font-weight: 700;
`;

export const Block = styled.View`
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E7E7E7;
    border-radius: 20px;
    padding: 10px;
`;

export const ProfileBackground = styled.View`
    width: 100%;
    height: 72px;
    background: #71EDA2;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: absolute;
`;

export const ProfileAvatar = styled.View`
    width: 100px;
    height: 100px;
    background: #FFFFFF;
    border: 1px solid #E7E7E7;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
`;


export const ProfileImg = styled.Image`
    width: 92px;
    height: 92px;
    border-radius: 100px;
`;