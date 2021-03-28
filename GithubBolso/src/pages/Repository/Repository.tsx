import React, {useState} from 'react';
import api from '../../services/api';
import {Text, Input} from 'react-native';
import {
  Container,
  Title,
  TextInput,
  ButtonSearch,
  TextButtonSearch,
  Description
} from './styles';
import CardRepository from '../../components/CardRepository/CardRepository';

const Repository: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  return (
    <>
      <Container>
        <Title>Explore repositórios do GitHub </Title>
        <Description>Exemplo: nomedousuario/nomedorepositório</Description>
        <TextInput
          placeholder="Digite o nome do repositório"
          onChangeText={value => setNewRepo(value)}
        />

        <ButtonSearch>
          <TextButtonSearch>Pesquisar</TextButtonSearch>
        </ButtonSearch>

        <CardRepository />
      </Container>
    </>
  );
};

export default Repository;
