import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img/404.jpg';
import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';
import { Container } from './styles';

function Page404() {
  return (
    <PageDefault>
      <Container>
        <img src={img} alt="404" />
        <Button margin="auto" as={Link} to="/">Voltar para home</Button>
      </Container>
    </PageDefault>
  );
}

export default Page404;
