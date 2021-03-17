import styled from 'styled-components'

export const Container = styled.View`
  font-size: 16px;
  flex: 1;
  align-items: flex-start;
  background-color: #F2F2F2;
`;

export const Text = styled.Text`
    font-size: 20px;
    color: red;
`

export const H1 = styled(Text)`
  color: white;
  font-size: 48px;
`;

export const H4 = styled(Text)` 
  color: ${({color}) => color?color:"white"};
  font-size: 18px;
  margin-right: 10px;
`;
