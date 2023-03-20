import { useNavigation } from '@react-navigation/core';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import useTokenValidation from '../../Functions/verifyJwtToken';
import { Body, colors, FeedList, LocationText, PetImage, Post, UserInfor, UserInforImage, UserInforTexts } from './style';

const DATA = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Carlos Eduardo',
    },
    date: '2023-03-19T20:35:32.846Z',
    locations: "Rua 1, 123 - Bairro 1, Cidade 1",
    likes: 10,
    photo: 'https://picsum.photos/700/500',
    liked: false,
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Clara Maria',
    },
    date: '2023-03-18T16:31:00.000Z',
    locations: "Rua 2, 123 - Bairro 2, Cidade 2",
    likes: 5,
    photo: 'https://picsum.photos/700/500',
    liked: false,
  },
  {
    id: 3,
    user: {
      id: 3,
      name: 'João Pedro',
    },
    date: '2021-05-01T00:00:00.000Z',
    locations: "Rua 3, 123 - Bairro 3, Cidade 3",
    likes: 5,
    photo: 'https://picsum.photos/700/500',
    liked: true,
  },
  {
    id: 4,
    user: {
      id: 4,
      name: 'Maria Eduarda',
    },
    date: '2021-05-01T00:00:00.000Z',
    locations: "Rua 4, 123 - Bairro 4, Cidade 4",
    likes: 5,
    photo: 'https://picsum.photos/700/500',
    liked: false,
  },
  {
    id: 5,
    user: {
      id: 5,
      name: 'Maria Eduarda',
    },
    date: '2021-05-01T00:00:00.000Z',
    locations: "Rua 5, 123 - Bairro 5, Cidade 5",
    likes: 5,
    photo: 'https://picsum.photos/700/500',
    liked: false,
  },
  {
    id: 6,
    user: {
      id: 6,
      name: 'Ana Beatriz',
    },
    date: '2021-05-01T00:00:00.000Z',
    locations: "Rua 6, 123 - Bairro 6, Cidade 6",
    likes: 5,
    photo: 'https://picsum.photos/700/500',
    liked: false,
  },
  {
    id: 7,
    user: {
      id: 7,
      name: 'Bernardo Soares',
    },
    date: '2021-05-01T00:00:00.000Z',
    locations: "Rua 7, 123 - Bairro 7, Cidade 7",
    likes: 5,
    photo: 'https://picsum.photos/700/500',
    liked: false,
  }
];

function dateSanitizer(date) {
  const dateObj = new Date(date);
  const dateNow = new Date();
  dateNow.setHours(dateNow.getHours() - 3);

  const minutes = Math.floor((dateNow - dateObj) / 60000);
  if (minutes < 60) {
    return `Há ${minutes} minuto${minutes > 1 ? 's' : ''}`;
  }

  const hours = Math.floor(minutes / 60);
  const minutesRemainder = minutes % 60;

  if (dateObj.getDate() === dateNow.getDate()) {
    return `Há ${hours} hora${hours > 1 ? 's' : ''} e ${minutesRemainder} minuto${minutesRemainder > 1 ? 's' : ''}`;
  }

  if (dateObj.getDate() === dateNow.getDate() - 1) {
    return `Ontem às ${dateObj.getHours()}:${String(dateObj.getMinutes()).padStart(2, '0')}`;
  }

  return dateObj.toLocaleDateString('pt-BR');
}

function randomColor() {
  const bgColor = Math.floor(Math.random() * 16777215).toString(16);
  const textColor = (parseInt(bgColor, 16) > 0xffffff / 1.1) ? '000000' : 'ffffff';
  return {
    backgroundColor: `#${bgColor}`,
    color: `#${textColor}`,
  };

}

export function ScreenA() {
  const [feed, setFeed] = useState(DATA);

  const isValid = useTokenValidation();
  const navigation = useNavigation();

  function handleLikeClick(id) {
    const index = DATA.findIndex(item => item.id === id);
    DATA[index].liked = !DATA[index].liked;
    DATA[index].liked ? DATA[index].likes++ : DATA[index].likes--;
    setFeed([...DATA]);
  };



  useEffect(() => {
    if (!isValid) {
      navigation.navigate("SignIn");
    }
  }, []);

  return (
    <Body>
      <FeedList
        data={feed}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Item item={item} handleLikeClick={handleLikeClick} />}
      />
    </Body>

  );
}

function Item({ item, handleLikeClick }) {
  return (
    <Post>
      <UserInfor>
        <UserInforImage style={randomColor()}>
          <Text style={{ color: colors.background, fontWeight: 600 }}>{item.user.name.split(' ')[0][0]}{item.user.name.split(' ')[1][0] || ''}</Text>
        </UserInforImage>
        <UserInforTexts>
          <Text style={{ fontWeight: 'bold' }}>{item.user.name}</Text>
          <Text>{dateSanitizer(item.date)}</Text>
        </UserInforTexts>
      </UserInfor>
      <PetImage source={{ uri: item.photo }} />
      <LocationText>{item.locations}</LocationText>
      {/* <PostFooter>
        <LikesArea onPress={() => handleLikeClick(item.id)}>
          {item.liked ? <FontAwesome name="heart" size={20} color={colors.accent} /> :
            <FontAwesome name="heart" size={20} color={colors.text} />}
          <Text>{item.likes}</Text>
        </LikesArea>
      </PostFooter> */}
    </Post>
  )
}

