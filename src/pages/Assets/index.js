import React from 'react';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import {Span, Container, Gradient} from '../home/style';
import {H4, H1} from '../../styles/main';
import { formatter } from '../home/index'

import Item from '../../components/Item/index';

const Assets = () => {
  return (
    <Container style={{padding: 15}}>
      <Card>
        <LinearGradient
          colors={['#0C5FFF', '#78BEF0']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={Gradient}>
          <H4>净资产</H4>
  <H1>{formatter(2220,0)}</H1>
          <Row>
            <H4>资产 {2000}</H4>
            <Space />
            <H4>负债 {-3000}</H4>
          </Row>
        </LinearGradient>
      </Card>
      <Row>
        <Box>
          <H4 color="black">借出</H4>
          <H4 color="black">{'12.0'}</H4>
        </Box>
        {/* this <Space/> is used as gap */}
        <Space />
        <Box>
          <H4 color="black">借入</H4>
          <H4 color="black">{'21.0'}</H4>
        </Box>
      </Row>
      <Item />
    </Container>
  );
};

export default Assets;

const Card = styled.View`
  width: 100%;
  height: 192px;
  margin-bottom: 15px;
`;
const Row = styled.View`
  flex-direction: row;
`;
const Box = styled.View`
  flex: 1;
  height: 80px;
  background-color: white;
  margin-bottom: 15px;
  border-radius: 5px;
  padding: 10px 20px;
  justify-content: space-around;
`;

const Space = styled.View`
  height: auto;
  width: 15px;
`;
