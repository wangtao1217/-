import React, {useState} from 'react';
import {Switch, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Item from '../../components/Item/index';

import {H1, H4} from '../../styles/main';
import {Main, Container, Span, Gradient} from './style';

const Home = () => {
  const [income, setIncome] = useState(0);
  const [remain, setremain] = useState(0);
  const [money, setMoney] = useState(1112212);
  const data = [1, 2, 3, 2];
  return (
    <Container>
      <Main>
        <LinearGradient
          colors={['#0C5FFF', '#78BEF0']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={Gradient}>
          <H1>{formatter(money, 0)}</H1>
          <Span>
            <H4>月收入：{income}</H4>
            <H4>月结余：{remain}</H4>
          </Span>
        </LinearGradient>
        <Item />
      </Main>
      {data.map(i => {
        return <Item key={i} />;
      })}
    </Container>
  );
};
export default Home;

export const formatter = (value, type) => {
  let output = String(value);

  switch (type) {
    case 0:
      let temp = String(output).split('');
      for (let i = temp.length ; i > 0; i -= 3) {
        temp.splice(i , 0, ',');
      }
      // temp.reverse().shift();
      output = temp;
    default:
      break;
  }

  return output;
};
