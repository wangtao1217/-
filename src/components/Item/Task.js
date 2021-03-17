import React from 'react';

import {View} from 'react-native';
import {H4} from '../../styles/main';
import {TaskContainer} from './style';

const Task = ({icon}) => {
  const [color, setColor] = React.useState('white');
  return (
    <TaskContainer>
      <H4>{icon}</H4>
      <H4 style={{color: 'gray', flex: 1}}>吃饭</H4>
      <H4 style={{color: 'red'}}>-12</H4>
    </TaskContainer>
  );
};

export default Task;
