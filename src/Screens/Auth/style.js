import styled from 'styled-components/native';

const colors = {
    primary: '#F1EDEB',
    secondary: '#C6BFB6',
    accent: '#9E8577',
    background: '#F2EEE8',
    text: '#4F4F4F',
    textLight: '#828282',
    success: '#4CAF50',
    error: '#F44336',
};

export const Body = styled.View`
  background-color: ${colors.background};
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

export const BtnCustomLogin = styled.TouchableOpacity`
    padding: 15px;
    border-radius: 7px;
    width: 100%;
    color: black;
    text-align: center;
    background-color: #D1C1B1;
    justify-content: center;
`;

export const BtnText = styled.Text`
    font-weight: bold;
    text-align: center;
`;

export const BtnCustomRegister = styled.TouchableOpacity`
    padding: 15px;
    border-radius: 7px;
    background-color: #D1C1B1;
    text-align: center;
`;

export const Container = styled.KeyboardAvoidingView``;

export const Input = styled.TextInput`
  height: 40px;
  width: 300px;
  border-color: ${colors.textLight};
  border-width: 0px;
  border-bottom-width: 1px;
`;

export const View = styled.View``;

export const Text = styled.Text`
  font-size: 16;
  line-height: 21px;
  padding: 12px;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: ${colors.text};
`;

export const BtnZeroBg = styled(BtnCustomLogin)`
  background-color: transparent;
  width: 300px;
`;

export const SmallText = styled.Text`
  font-size: 14px;
  line-height: 21px;
  padding: 12px 0;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: ${colors.text};
`;

export const ContainerAlert = styled.View`
  margin: 10px 0;
  background-color: ${colors.error};
`;

export const Alert = styled.Text`
  font-size: 14px;
  line-height: 21px;
  border-radius: 7px;
  padding: 20px 7px;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: #FFFFFF;
`;

export const TextAnchor = styled.Text`
  color: ${colors.secondary};
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
  border-radius: 7px;
  background-color: ${props => props.correct ? colors.success : colors.error};
  color: #FFFFFF;
`;
