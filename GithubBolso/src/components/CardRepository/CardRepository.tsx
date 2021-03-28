import React, {useState} from 'react';
import {Text, Input, Image} from 'react-native';
import {
  Container,
  SectionInfoUser,
  SectionNameLogin,
  NameUser,
  LoginUser,
  SectionInfoRepository,
  RepositoryName,
  Description,
  InfoRepository,
  TextDescription,
  SectionInfoRepo,
} from './styles';

interface Repository {
  urlUserImage: string;
  login: string;
  nameRepo: string;
  description: string;
  language: string;
  forks: string;
  star: string;
}

const CardRepository: React.FC<Repository> = props => {
  return (
    <>
      <Container>
        <SectionInfoUser>
          <Image
            style={{
              height: 65,
              width: 65,
              borderRadius: 50,
            }}
            source={{
              uri: props.urlUserImage,
            }}
          />
          <SectionNameLogin>
            <NameUser>{props.login}</NameUser>
          </SectionNameLogin>
        </SectionInfoUser>
        <SectionInfoRepository>
          <RepositoryName>{props.nameRepo}</RepositoryName>
          <Description>{props.description}</Description>
          <InfoRepository>
            <SectionInfoRepo>
              <Image
                style={{height: 20, width: 20}}
                source={require('../../assets/circulo.png')}
              />
              <TextDescription>{props.language}</TextDescription>
            </SectionInfoRepo>
            <SectionInfoRepo>
              <Image
                style={{height: 20, width: 20}}
                source={require('../../assets/share.png')}
              />
              <TextDescription>{props.forks}</TextDescription>
            </SectionInfoRepo>
            <SectionInfoRepo>
              <Image
                style={{height: 20, width: 20}}
                source={require('../../assets/star.png')}
              />
              <TextDescription>{props.star}</TextDescription>
            </SectionInfoRepo>
          </InfoRepository>
        </SectionInfoRepository>
      </Container>
    </>
  );
};

export default CardRepository;
