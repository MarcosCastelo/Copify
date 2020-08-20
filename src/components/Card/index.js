import React from 'react';

import { Container,Label } from './styles';

function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Criar o componente label e refatorar o código</p>
      <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt=""/>
    </Container>
  );
}

export default Card;