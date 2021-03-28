import styled from 'styled-components/native';

export const Container = styled.View`
  width: 350px;
  height: 300px;
  background-color: #f3f3f3;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const SectionInfoUser = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const SectionNameLogin = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const NameUser = styled.Text`
  font-size: 23px;
  font-family: 'Roboto-Medium';
  color: #010101;
  font-weight: bold;
  margin-left: 20px;
`;

export const LoginUser = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: #adadad;
  font-weight: bold;
`;

export const SectionInfoRepository = styled.View`
  flex: 1;
`;

export const RepositoryName = styled.Text`
  font-size: 22px;
  font-family: 'Roboto-Medium';
  color: black;
  font-weight: bold;
`;
export const Description = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Medium';
  color: #adadad;
`;

export const InfoRepository = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex: 1;
`;

export const SectionInfoRepo = styled.View`
  flex-direction: row;
`;

export const TextDescription = styled.Text`
  font-size: 15px;
  font-family: 'Roboto-Medium';
  color: #adadad;
  margin-left: 7px;
`;
