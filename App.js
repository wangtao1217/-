import React, {useState} from 'react';
import {Container, Text} from './src/styles/main';

import Home from './src/pages/home/index';
import Assets from './src/pages/Assets/index';

const App = () => {
  const [text, setText] = useState('...');
  return (
    <Container>
      <Home />
      {/* <Assets /> */}
    </Container>
  );
};

export default App;
