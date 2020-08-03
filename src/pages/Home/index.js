import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Load from '../../components/Load';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    // http://localhost:8080/videos?_embed=videos
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && <Load />}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[3].videos[2].titulo}
                url={dadosIniciais[3].videos[2].url}
                videoDescription="Quando seres interplanetários deixam marcas na Terra, a Dra. Louise Banks (Amy Adams), uma linguista especialista no assunto, é procurada por militares para traduzir os sinais e desvendar se os alienígenas representam uma ameaça ou não. No entanto, a resposta para todas as perguntas e mistérios pode ameaçar a vida de Louise e a existência de toda a humanidade."
              />
              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}

export default Home;
