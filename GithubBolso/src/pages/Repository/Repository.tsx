import React, {useState} from 'react';
import api from '../../services/api';
import {Text, Input} from 'react-native';
import {
  Container,
  Title,
  TextInput,
  ButtonSearch,
  TextButtonSearch,
  Description,
  Error
} from './styles';
import CardRepository from '../../components/CardRepository/CardRepository';

interface dataRepository {
  login: string;
  nameRepo: string;
  urlUserImage: string;
  description: string;
  language: string;
  forks: string;
  star: string;
}

const Repository: React.FC = () => {
  const [newRepository, setNewRepository] = useState('');
  const [dataRepository, setDataRepository] = useState({});
  const [inputError, setInputError] = useState('');
  const [showRepository, setShowRepository] = useState(false);
  async function handleSearchRepository() {
    if (!newRepository) {
      setInputError('Digite o nome de um repositório');
      setShowRepository(false);
      return;
    }

    try {
      const response = await api.get(`repos/${newRepository}`);

      const repository = response.data;
      console.log(repository);
      setDataRepository({
        nameRepo: repository.name,
        description: repository.description,
        login: repository.owner.login,
        language: repository.language,
        forks: repository.forks,
        star: repository.stargazers_count,
        urlUserImage: repository.owner.avatar_url,
      });
      setInputError('');
      setShowRepository(true);
    } catch (err) {
       setInputError("Erro na busca por esse repositório ");
    }
  }

  return (
    <>
      <Container>
        <Title>Explore repositórios do GitHub </Title>
        <Description>Exemplo: nomedousuario/nomedorepositório</Description>
        <TextInput
          placeholder="Digite o nome do repositório"
          onChangeText={value => setNewRepository(value)}
        />
        <Text>{inputError && <Error>{inputError}</Error>}</Text>
        <ButtonSearch onPress={handleSearchRepository}>
          <TextButtonSearch>Pesquisar</TextButtonSearch>
        </ButtonSearch>

        {showRepository ? (
          <CardRepository
            login={dataRepository.login}
            nameRepo={dataRepository.nameRepo}
            urlUserImage={dataRepository.urlUserImage}
            description={dataRepository.description}
            language={dataRepository.language}
            forks={dataRepository.forks}
            star={dataRepository.star}
          />
        ) : null}
      </Container>
    </>
  );
};

export default Repository;
