import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 22px;
  font-family: 'Roboto-Medium';
  color: #7d5ec5;
  font-weight: bold;
  text-align: center;
`;

export const Header = styled.View`
  /*  background-color: #ECF0F2; */
  background-color: #ffffff;
  padding: 30px;
  border-radius: 20px;
`;

export const Container = styled.View`
 
  background-color: #ecf0f2;
  padding-top: 25px;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const CardOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border: 1px;
  border-color: #bfc5c7;
  border-radius: 15px;
  height: 120px;
  width: 350px;
  margin-bottom: 30px;
  padding-left: 30px;
`;

export const TitleCardOption = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';
  color: #7d5ec5;
  font-weight: bold;
  margin-left: 30px;
`;
