import styled from 'styled-components/native';

export const Container = styled.View`
background-color: #e2e2e4;
padding-top: 15px;
flex-direction: column;
align-items: center;
flex: 1;
  
`;

export const Title = styled.Text`
  font-size: 25px;
  font-family: 'Roboto-Medium';
  color: #7d5ec5;
  font-weight: bold;
  padding: 11px;
`;

export const Description = styled.Text`
  font-size: 12px;
  font-family: 'Roboto-Medium';
  color: #101c42;
  font-weight: bold;
  
`;

export const TextInput = styled.TextInput`
  font-family: 'Roboto-Medium';
  font-size: 19px;
  padding: 15px;
  height: 60px;
  border: 1px;
  width: 350px;
  border-radius: 15px;
`;

export const ButtonSearch = styled.TouchableOpacity`
  margin-top: 20px;
  margin-bottom: 30px;
  height: 60px;
  width: 350px;
  background-color: #101c42;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const TextButtonSearch = styled.Text`
  font-size: 22px;
  font-family: 'Roboto-Medium';
  color: #ffffff;
`;

