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
} from "../style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Spinner from 'react-native-loading-spinner-overlay';
import axios from "axios";


export function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const api = axios.create({
        baseURL: "http://192.168.1.103:7209/v1/",
        headers: { "Content-Type": "application/json" },
    });

    function handleEmailChange(text) {
        setEmail(text);
    }

    function handlePasswordChange(text) {
        setPassword(text);
    }

    async function handleSignIn() {
        setLoading(true);
        try {
            if (email != "" || password != "") {
                api.post("authenticate", {
                    user: email,
                    pass: password
                    }).then((response) => {
                        setLoading(false);
                        const data = response.data;
                        console.log(data.token);
                        alert("Login realizado com sucesso!");
                    }).catch((error) => {
                        setLoading(false);
                        console.log(error);
                        alert("Erro ao realizar login!");
                    });
            }
            else {
                setLoading(false);
                alert("Digite um login e senha!");
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Usuário e/ou senha incorretos!");
        }
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

                {/* exibe o spinner enquanto a requisição está sendo enviada */}
                <Spinner visible={loading} />

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