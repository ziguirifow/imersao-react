import React from "react";
import Menu from "../../components/Menu";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[3].videos[2].titulo}
        url={dadosIniciais.categorias[3].videos[2].url}
        videoDescription={
          "Quando seres interplanetários deixam marcas na Terra, a Dra. Louise Banks (Amy Adams), uma linguista especialista no assunto, é procurada por militares para traduzir os sinais e desvendar se os alienígenas representam uma ameaça ou não. No entanto, a resposta para todas as perguntas e mistérios pode ameaçar a vida de Louise e a existência de toda a humanidade."
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[4]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[5]} />

      <Footer />
    </div>
  );
}

export default Home;
