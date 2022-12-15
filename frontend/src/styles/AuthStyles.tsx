import styled from "styled-components/native";

export const AuthBlock = styled.View`
    margin-top: 80px;
    align-items: center;
    justify-content: center;
`;

export const InputCode = styled.TextInput.attrs({
    placeholderTextColor: "#a0a0a0"
})`
    margin-top: 20px;
    width: 140px;
    background-color: #ffffff;
    border-radius: 10px;
    font-size: 24px;
    padding: 10px 20px;
    color: #000000;
    text-align: center;
    border: 1px solid #e2e2e2;
`;

export const InputNumber = styled.TextInput.attrs({
    placeholderTextColor: "#a0a0a0"
})`
    margin-top: 20px;
    width: 230px;
    background-color: #ffffff;
    border-radius: 10px;
    font-size: 24px;
    padding: 10px 20px;
    color: #000000;
    text-align: center;
    border: 1px solid #e2e2e2;
`;

export const SubmitButton = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: #16DB65;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 10px 20px;
`;