import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Subsection from './components/Subsection';
import Footer from './components/Footer';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <Section
          title="Erradicação da Pobreza"
          description="ODS 01 Erradicar a pobreza em todas as formas e em todos os lugares."
          imageSrc="image1"
        />
        <Subsection
          backgroundColor="#D41A3C"
          title="O que significa o primeiro objetivo dos ODS da ONU?"
          description="Erradicação da pobreza é o primeiro objetivo do plano de desenvolvimento sustentável elaborado pela ONU. Para atingir esse objetivo, a ONU estabeleceu as seguintes metas:"
        />
        <Subsection
          title="1.1"
          description="Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia"
          imageSrc="image4"
        />
        <Subsection
          backgroundColor="#0052B4"
          title="1.2"
          description="Até 2030, reduzir pelo menos à metade a proporção de homens, mulheres e crianças, de todas as idades, que vivem na pobreza, em todas as suas dimensões, de acordo com as definições nacionais"
        />
        <Subsection
          title="1.3"
          description="Implementar, em nível nacional, medidas e sistemas de proteção social adequados, para todos, incluindo pisos, e até 2030 atingir a cobertura substancial dos pobres e vulneráveis"
        />
        <Subsection
          title="1.4"
          description="Até 2030, garantir que todos os homens e mulheres, particularmente os pobres e vulneráveis, tenham direitos iguais aos recursos econômicos, bem como o acesso a serviços básicos, propriedade e controle sobre a terra e outras formas de propriedade, herança, recursos naturais, novas tecnologias apropriadas e serviços financeiros, incluindo microfinanças"
          imageSrc="image5"
        />
        <Subsection
          title="1.5"
          description="Até 2030, construir a resiliência dos pobres e daqueles em situação de vulnerabilidade, e reduzir a exposição e vulnerabilidade destes a eventos extremos relacionados com o clima e outros choques e desastres econômicos, sociais e ambientais"
          imageSrc="image6"
        />
        <Subsection
          title="1.a"
          description="Garantir uma mobilização significativa de recursos a partir de uma variedade de fontes, inclusive por meio do reforço da cooperação para o desenvolvimento, para proporcionar meios adequados e previsíveis para que os países em desenvolvimento"
        />
        <Subsection
          title="1.b"
          description="Criar marcos políticos sólidos em níveis nacional, regional e internacional, com base em estratégias de desenvolvimento a favor dos pobres e sensíveis a gênero, para apoiar investimentos acelerados nas ações de erradicação da pobreza"
        />
        <Section
          title="VEJA OS ÍNDICES DE POBREZA"
          description="Visualize a situação de pobreza no Brasil e na Colombia"
          imageSrc="image3"
          backgroundColor="#D41A3C"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
