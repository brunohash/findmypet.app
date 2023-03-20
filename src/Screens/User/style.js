import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const colors = {
  primary: '#F1EDEB',
  secondary: '#C6BFB6',
  accent: '#9E8577',
  background: '#edf1f4',
  text: '#4F4F4F',
  textLight: '#828282',
  success: '#4CAF50',
  error: '#F44336',
};
export const Body = styled.SafeAreaView`
  margin-top: ${StatusBar.currentHeight.toFixed(2) + 'px' || '0px'};
  padding-bottom: 50px;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const View = styled.View``;
export const Text = styled.Text`
  color: ${colors.text};
`;

export const FeedList = styled.FlatList`
  width: 100%;
`;

export const Post = styled.View`
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 5px #000;
`;

export const UserInfor = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const UserInforImage = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const UserInforTexts = styled.View`
  flex-direction: column;
`;

export const PetImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 5px;
`;

export const LocationText = styled(Text)`
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  /* margin-bottom: 10px; */
  /* border-bottom-width: 1px; */
  /* border-bottom-color: ${colors.secondary}; */
`;

export const PostFooter = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const LikesArea = styled.TouchableOpacity`
  margin-bottom: 5px;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

