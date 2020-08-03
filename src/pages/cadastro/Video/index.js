import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './styled';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    descricao: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          // alert('Video Cadastrado com sucessagem');

          // eslint-disable-next-line max-len
          const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

          videosRepository
            .create({
              titulo: values.titulo,
              url: values.url,
              descricao: values.descricao,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              history.push('/');
            });
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do Vídeo"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Descrição do Vídeo"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Categoria do Vídeo"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>

      </form>

    </PageDefault>
  );
}

export default CadastroVideo;
