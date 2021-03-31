import React, {useState} from 'react';
import api from '../../services/api';
import {Text, Input} from 'react-native';
import {
  Title,
  TextInput,
  Container,
  ButtonSearch,
  TextButtonSearch,
  Error,
} from './styles';
import CardProfile from '../../components/CardProfile/CardProfile';

interface Data {
  urlUserImage: string;
  full_name: string;
  userBio: string;
  cityUser: string;
  followersUser: string;
  followingUser: string;
}

const User: React.FC = () => {
  const [nameUser, setNameUser] = useState(null);
  const [dataUser, setDataUser] = useState<Data>();
  const [showUser, setShowUser] = useState(false);
  const [inputError, setInputError] = useState('');

  async function handleSearchUser() {
    if (!nameUser) {
      setInputError('Digite um usuário');
      setShowUser(false);
      return;
    }

    try {
      const response = await api.get(`users/${nameUser}`);

      const user = response.data;

      setDataUser({
        full_name: user.name,
        userBio: user.bio,
        cityUser: user.location,
        followersUser: user.followers,
        followingUser: user.following,
        urlUserImage: user.avatar_url,
      });
      setShowUser(true);

      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse usuário ');
    }
  }

  return (
    <>
      <Container keyboardShouldPersistTaps="handled">
        <Title>Explore usuários cadastrados no GitHub </Title>

        <TextInput
          placeholder="Digite o nome do usuário"
          onChangeText={value => setNameUser(value)}
        />
        <Text>{inputError && <Error>{inputError}</Error>}</Text>
        <ButtonSearch onPress={handleSearchUser}>
          <TextButtonSearch>Pesquisar</TextButtonSearch>
        </ButtonSearch>

        {showUser ? (
          <CardProfile
            urlUserImage={dataUser.urlUserImage}
            full_name={dataUser.full_name}
            userBio={dataUser.userBio}
            cityUser={dataUser.cityUser}
            followersUser={dataUser.followersUser}
            followingUser={dataUser.followingUser}
          />
        ) : null}
      </Container>
    </>
  );
};

export default User;
