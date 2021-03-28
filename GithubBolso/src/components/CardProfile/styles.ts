import styled from 'styled-components/native';

export const Container = styled.View`
  width: 350px;
  height: 330px;
  background-color: #f3f3f3;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const UserName = styled.Text`
  font-size: 23px;
  font-family: 'Roboto-Medium';
  color: #010101;
  font-weight: bold;
  margin-top: 5px;
`;

export const UserCity = styled.Text`
  font-size: 13.5px;
  font-family: 'Roboto-Medium';
  color: #858585;
`;

export const UserBio = styled.Text`
  font-size: 16.5px;
  font-family: 'Roboto-Regular';
  color: #010101;
`;

export const ContainerFollowersFollowingUser = styled.View`
  flex-direction: row;
`;

export const FollowersFollowingUser = styled.View`
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
  padding-left: 15px;
`;

export const FollowersUser = styled.Text`
  font-size: 25px;
  font-family: 'Roboto-Medium';
  font-weight: bold;
  color: #7c7b92;
`;

export const SpanFollowersUser = styled.Text`
  font-size: 15px;
  font-family: 'Roboto-Medium';
  color: #7c7b92;
`;
