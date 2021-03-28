import React from 'react';
import {Text, Image, Button, View} from 'react-native';
import {Title, Container, Header, CardOption, TitleCardOption} from './styles';

const Home: React.FC = ({navigation}) => {
  return (
    <>
      <Header>
        <Title>GitApp</Title>
      </Header>
      <Container>
        <CardOption onPress={() => navigation.navigate('User')}>
          <Image
            style={{height: 50, width: 50}}
            source={require('../../assets/user.png')}
          />

          <TitleCardOption> Usuário </TitleCardOption>
        </CardOption>

        <CardOption onPress={() => navigation.navigate('Repository')}>
          <Image
            style={{height: 50, width: 50}}
            source={require('../../assets/database.png')}
          />

          <TitleCardOption> Repositório</TitleCardOption>
        </CardOption>
      </Container>
    </>
  );
};

export default Home;
