import React from 'react';
import {View} from 'react-native';
import {H4, H1} from '../../styles/main';

import {Container, Head} from './style';
import Task from './Task';

const Item = (props) => {
    return (
    <Container>
      <Head>
        <H4 style={{color:"black"}}>3.18 今天</H4>
        <H4 style={{color:"black"}}>+12 - 0</H4>
      </Head>
        {[12,21,32].map(i => {
            return <Task icon={'s'}/> 
        })}
    </Container>
  );
};

export default Item;
