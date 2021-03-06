import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carrousel from '../../components/Carrousel';
import Footer from '../../components/Footer'
import Menu from '../../components/Menu';

function Home() {

  return (
    <div style={{ background: "#141414" }}>
      <Menu/>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
        />

        <Carrousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carrousel
          category={dadosIniciais.categorias[1]}
        />

        <Carrousel
          category={dadosIniciais.categorias[2]}
        />

        <Carrousel
          category={dadosIniciais.categorias[3]}
        />

        <Carrousel
          category={dadosIniciais.categorias[4]}
        />

        <Carrousel
          category={dadosIniciais.categorias[5]}
        />

      <Footer />
    </div>
  );
}

export default Home;
