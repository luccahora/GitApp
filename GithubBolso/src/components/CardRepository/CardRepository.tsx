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

const CardRepository: React.FC = () => {
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
              uri: 'https://avatars.githubusercontent.com/u/39227316?v=4',
            }}
          />
          <SectionNameLogin>
            <NameUser> Lucca Hora</NameUser>
            <LoginUser>luccahora</LoginUser>
          </SectionNameLogin>
        </SectionInfoUser>
        <SectionInfoRepository>
          <RepositoryName>CertidaoNegativaBahia</RepositoryName>
          <Description>
            Script para fazer download automático de Certidões Negativas pela
            Sefaz BA.
          </Description>
          <InfoRepository>
            <SectionInfoRepo>
              <Image
                style={{height: 20, width: 20}}
                source={require('../../assets/circulo.png')}
              />
              <TextDescription>Java</TextDescription>
            </SectionInfoRepo>
            <SectionInfoRepo>
              <Image
                style={{height: 20, width: 20}}
                source={require('../../assets/share.png')}
              />
              <TextDescription>12</TextDescription>
            </SectionInfoRepo>
            <SectionInfoRepo>
              <Image
                style={{height: 20, width: 20}}
                source={require('../../assets/star.png')}
              />
              <TextDescription>0</TextDescription>
            </SectionInfoRepo>
          </InfoRepository>
        </SectionInfoRepository>
      </Container>
    </>
  );
};

export default CardRepository;
