import React, { useState } from 'react';
import {
  Body,
  Input,
  ScrollView,
  BtnCustomRegister,
  SmallText,
  InputArea,
  ContainerAlert,
  AlertSuccess,
} from '../style';

export function SignUp() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCorrect, setEmailCorrect] = useState(false);

  function register() {
    // Aqui você pode realizar o processamento dos dados coletados
    alert(`Nome: ${name} \nData de aniversário: ${birthday} \nE-mail: ${email} \nSenha: ${password}`);
  }

  function compareEmails() {
    const emailCorrect = email === confirmEmail;
    if (emailCorrect) {
      setEmailCorrect(true);
    } else {
      setEmailCorrect(false);
    }
  }

  function handleEmailChange(text) {
    setEmail(text);
    if (confirmEmail !== '' && text === confirmEmail) {
      setEmailCorrect(true);
    } else {
      setEmailCorrect(false);
    }
  }

  function handleConfirmEmailChange(text) {
    setConfirmEmail(text);
    if (email !== '' && text === email) {
      setEmailCorrect(true);
    } else {
      setEmailCorrect(false);
    }
  }

  return (
    <Body style={{ justifyContent: 'center' }}>
      <ScrollView>
        <InputArea>
          <SmallText>Nome</SmallText>
          <Input placeholder="Insira seu nome" onChangeText={text => setName(text)} />
        </InputArea>

        <InputArea>
          <SmallText>Data de aniversário</SmallText>
          <Input placeholder="Insira sua data de nascimento" onChangeText={text => setBirthday(text)} />
        </InputArea>

        <InputArea>
          <SmallText>Insira seu e-mail</SmallText>
          <Input placeholder="insira seu E-mail" onChangeText={handleEmailChange} />
        </InputArea>

        <InputArea>
          <SmallText>Confirmar E-mail</SmallText>
          <Input placeholder="confirme seu E-mail" onChangeText={handleConfirmEmailChange} />
        </InputArea>

        <InputArea>
          <SmallText>Senha</SmallText>
          <Input placeholder="Crie uma senha" onChangeText={text => setPassword(text)} />
        </InputArea>

        <BtnCustomRegister title="Criar conta" onPress={register} />

        {emailCorrect !== '' && (
          <InputArea>
            <ContainerAlert>
              <AlertSuccess correct={emailCorrect}>
                {emailCorrect ? 'E-mails conferem!' : 'Os e-mails não coincidem!'}
              </AlertSuccess>
            </ContainerAlert>
          </InputArea>
        )}
      </ScrollView>
    </Body>
  );
}
