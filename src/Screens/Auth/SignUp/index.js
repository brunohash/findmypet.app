import React, { useState } from 'react';
import {
  Body,
  Input,
  ScrollView,
  BtnText,
  BtnCustomRegister,
  SmallText,
  InputArea,
  ContainerAlert,
  AlertSuccess
} from '../style';
import Spinner from 'react-native-loading-spinner-overlay';

export function SignUp() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMatched, setEmailMatched] = useState(false);
  const [loading, setLoading] = useState(false);

  function register() {
    setLoading(true);
    const userData = { name, birthday, email, password };

    if (!emailMatched) {
      setLoading(false);
      alert('Os e-mails não coincidem!');
      return;
    }

    if (!name || !birthday || !email || !password) {
      setLoading(false);
      alert('Preencha todos os campos!');
      return;
    } else {
      fetch('https://myapi.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })
        .then(response => response.json())
        .then(data => {
          setLoading(false);
          console.log('Success:', data);
          alert('Cadastro realizado com sucesso!');
        })
        .catch(error => {
          setLoading(false);
          console.error('Error:', error);
          alert('Erro ao realizar cadastro, tente novamente.');
        });
    }
  }

  function compareEmails() {
    const emailCorrect = email === confirmEmail;
    setEmailMatched(emailCorrect);
  }

  return (
    <Body style={{ justifyContent: 'center' }}>
      <ScrollView>
        <InputArea>
          <SmallText>Nome</SmallText>
          <Input placeholder="Insira seu nome" value={name} onChangeText={text => setName(text)} />
        </InputArea>

        <InputArea>
          <SmallText>Data de aniversário</SmallText>
          <Input placeholder="Insira sua data de nascimento" value={birthday} onChangeText={text => setBirthday(text)} keyboardType='numeric' />
        </InputArea>

        <InputArea>
          <SmallText>Insira seu e-mail</SmallText>
          <Input placeholder="insira seu E-mail" value={email} onChangeText={text => setEmail(text)} keyboardType='email-address' />
        </InputArea>

        <InputArea>
          <SmallText>Confirmar E-mail</SmallText>
          <Input placeholder="confirme seu E-mail" value={confirmEmail} onChangeText={text => setConfirmEmail(text)} keyboardType='email-address' onBlur={compareEmails} />
        </InputArea>

        <InputArea>
          <SmallText>Senha</SmallText>
          <Input placeholder="Crie uma senha" value={password} onChangeText={text => setPassword(text)} secureTextEntry />
        </InputArea>

        <BtnCustomRegister onPress={register}>
          <BtnText>Criar uma conta</BtnText>
        </BtnCustomRegister>

        <Spinner visible={loading} />

        {email && confirmEmail && emailMatched === false && (
          <InputArea>
            <ContainerAlert>
              <AlertSuccess correct={emailMatched}>
                {emailMatched ? 'E-mails conferem!' : 'Os e-mails não coincidem!'}
              </AlertSuccess>
            </ContainerAlert>
          </InputArea>
        )}
      </ScrollView>
    </Body>
  );
}
