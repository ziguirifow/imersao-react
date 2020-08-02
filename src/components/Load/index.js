import React from 'react';
import { Default } from 'react-spinners-css';
import styles from 'styled-components';

const Container = styles.div`
  width: 100%;
  height: 100%;

  position: fixed;

  display: grid;
  place-items: center;

`;

function Load() {
  return (
    <Container>
      <Default color="red" />
    </Container>
  );
}

export default Load;
