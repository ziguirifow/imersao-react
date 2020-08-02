import { getRandomColor } from '@bit/joshk.jotils.get-random-color';
import React from 'react';
import { Ellipsis } from 'react-spinners-css';
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
      <Ellipsis color={getRandomColor()} />
    </Container >
  );
}

export default Load;
