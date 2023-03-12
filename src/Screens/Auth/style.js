import styled from 'styled-components/native';

export const Body = styled.View`
    height: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const ScrollView = styled.ScrollView``;

export const Brand = styled.Text`
    font-size: 30px;
    padding-top: 30px;
    font-weight: bold;
`;

export const BtnCustomLogin = styled.Button`
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    text-align: center;
    background-color: gray;
    justify-content: center;
`;

export const BtnCustomRegister = styled.Button`
    padding: 12px;
    width: 100%;
    text-align: center;
`;

export const Container = styled.KeyboardAvoidingView``;

export const Input = styled.TextInput`
    height: 40px;
    width: 300px;
    border-color: gray;
    border-width: 0px;
    border-bottom-width: 1px;
`;

export const View = styled.View` `;

export const Text = styled.Text`
    font-size: 16;
    line-height: 21px;
    padding: 12px;
    font-weight: bold;
    letter-spacing: 0.25px;
`;

export const SmallText = styled.Text`
    font-size: 14px;
    line-height: 21px;
    padding: 12px 0;
    font-weight: bold;
    letter-spacing: 0.25px;
`;

export const ContainerAlert = styled.View`
    margin: 10px 0;
    background-color: #FFCDD2;
`;

export const Alert = styled.Text`
    font-size: 14px;
    line-height: 21px;
    padding: 20px 7px;
    font-weight: bold;
    letter-spacing: 0.25px;
`;

export const TextAnchor = styled.Text`
    color: #3F51B5;
    font-size: 14px;
    line-height: 21px;
    padding: 12px;
    font-weight: bold;
    letter-spacing: 0.25px;
    text-align: center;
`;

export const InputArea = styled.View`
    padding: 10px 0;
`;

export const AlertSuccess = styled.Text`
  padding: 10px;
  background-color: ${props => props.correct ? 'green' : 'red'};
  color: #FFFFFF;
`;