import React from 'react';
import {Text, Image, Button, View} from 'react-native';
import {
  Container,
  UserName,
  UserCity,
  UserBio,
  FollowersFollowingUser,
  FollowersUser,
  SpanFollowersUser,
  ContainerFollowersFollowingUser,
} from './styles';

interface userGit {
  urlUserImage: string;
  full_name: string;
  userBio: string;
  cityUser: string;
  followersUser: string;
  followingUser: string;
}

const CardProfile: React.FC<userGit> = (props) => {
  return (
    <Container>
      <Image
        style={{
          height: 100,
          width: 100,
          borderRadius: 25,
        }}
        source={{uri: props.urlUserImage}}
      />
      <UserName>{props.full_name}</UserName>
      <UserCity>{props.cityUser}</UserCity>
      <UserBio>{props.userBio}</UserBio>
      <ContainerFollowersFollowingUser>
        <FollowersFollowingUser>
          <FollowersUser>{props.followingUser}</FollowersUser>
          <SpanFollowersUser>Seguindo</SpanFollowersUser>
        </FollowersFollowingUser>
        <FollowersFollowingUser>
          <FollowersUser>{props.followersUser}</FollowersUser>
          <SpanFollowersUser>Seguidores</SpanFollowersUser>
        </FollowersFollowingUser>
      </ContainerFollowersFollowingUser>
    </Container>
  );
};

export default CardProfile;
