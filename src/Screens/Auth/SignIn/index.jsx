import AsyncStorage from '@react-native-async-storage/async-storage';

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
import useTokenValidation from '../../../Functions/verifyJwtToken';

export function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const isValid = useTokenValidation();

    function handleEmailChange(text) {
        setEmail(text);
    }
    function handlePasswordChange(text) {
        setPassword(text);
    }

    useEffect(() => {
        if (isValid) {
            navigation.navigate("Tabs", { screen: "ScreenA" });
        }
    }, []);

    async function handleSignIn() {
        if (!email || !password) {
            alert("Digite um login e senha!");
            return;
        }
        setLoading(true);
        api.post("authenticate", {
            user: email,
            pass: password
        }).then((response) => {
            setLoading(false);
            const { token } = response.data;
            AsyncStorage.setItem('token', token);
            navigation.navigate("Tabs", { screen: "ScreenA" });
        }).catch((error) => {
            setLoading(false);
            console.log(error);
            alert("Usuário e/ou senha incorretos!");
        });
        setLoading(false);
        alert("Digite um login e senha!");
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

                <Spinner visible={loading} />
            </View>

            <View>
                <BtnZeroBg title="Registre-se agora" onPress={handleSignUp}>
                    <BtnText> Registre-se agora </BtnText>
                </BtnZeroBg>
            </View>
        </Body>
    );
}