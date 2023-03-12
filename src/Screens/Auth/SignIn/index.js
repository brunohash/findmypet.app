import {
    Body,
    Input,
    View,
    BtnText,
    Brand,
    SmallText,
    BtnZeroBg,
    InputArea,
    BtnCustomLogin,
    ContainerAlert,
    Alert,
  } from "../style";
  
  import { useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  
  export function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function handleEmailChange(text) {
      setEmail(text);
    }
  
    function handlePasswordChange(text) {
      setPassword(text);
    }
  
    function handleSignIn() {
      alert(`E-mail: ${email}, Senha: ${password}`);
    }
  
    function handleSignUp() {
      navigation.navigate("SignUp");
    }
  
    return (
      <Body>
        <View>
          <Brand> FindMyPet 🦴</Brand>
          <SmallText> Ajude-nos a encontrar seu pet </SmallText>
        </View>
  
        <View>
          <InputArea>
            <SmallText>Insira seu e-mail</SmallText>
            <Input placeholder="E-mail" onChangeText={handleEmailChange} />
          </InputArea>
  
          <InputArea>
            <SmallText>Insira sua senha</SmallText>
            <Input placeholder="Senha" onChangeText={handlePasswordChange} />
          </InputArea>
  
          <InputArea>
            <BtnCustomLogin title="Fazer Login" onPress={handleSignIn}>
                <BtnText> Fazer Login </BtnText>
            </BtnCustomLogin>
          </InputArea>
  
          {/* <ContainerAlert>
            <Alert>Algum alerta</Alert>
          </ContainerAlert> */}
        </View>
  
        <View>
          <BtnZeroBg title="Registre-se agora" onPress={handleSignUp}>
            <BtnText> Registre-se agora </BtnText>
          </BtnZeroBg>
        </View>
      </Body>
    );
  }