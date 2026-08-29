
{/* 
  App.jsx é o esqueleto do website ou aplicação

  - é onde se decide que componentes existem e em que ordem
  aparecem na página
  - é o ficheiro que já está a ser editado sempre que 
  se adicona um novo componente à página
  ex: <nav/> <Hero/> <WhyVisit/> <Footer/>...

  pensar no App.jsx como o índice de um livro:
  não escreve o conteúdo de cada capítulo, 
  mas diz que capítulos existem e em que ordem aparecem
  ex: primeiro vem o Nav, depois o Hero,
  depois o WhyVisit --- e cada capítulo (componente)
  tem o seu próprio ficheiro, com o seu próprio conteúdo

*/}
{/*
  importar a função Nav da pasta components, ficheiro Nav
*/}
import Nav from './components/Nav';

{/*
  importar a função Hero da pasta components, ficheiro Hero
*/}
import Hero from './components/Hero';

{/*
  importar a função WhyVisit da pasta components, ficheiro WhyVisit
*/}
import WhyVisit from './components/WhyVisit';

{/*
  importar a função News da pasta components, ficheiro News
*/}
import News from './components/News';

{/*
  importar a função Friends da pasta components, ficheiro Friends
*/}
import Friends from './components/Friends';

{/*
  importar a função Newsletter da pasta components, ficheiro Newsletter
*/}
import Newsletter from './components/Newsletter';

{/*
  importar a função About da pasta components, ficheiro About
*/}
import About from './components/About';

{/*
  importar a função Footer da pasta components, ficheiro Footer
*/}
import Footer from './components/Footer';

{/*
  importar a função VisitHero da pasta components, ficheiro VisitHero
*/}
import VisitHero from './components/VisitHero';

{/*
  importar a função VisitInfo da pasta components, ficheiro VisitInfo
*/}
import VisitInfo from './components/VisitInfo';

{/*
  importar os estilos globais da app
*/}
import './App.css';



function App() {
  return (
    <>
      <Nav />
      <Hero />
      <WhyVisit />
      <News />
      <Friends />
      <Newsletter />
      <About />
      <VisitHero />
      <VisitInfo />
      <Footer />
    </>
  );
}

export default App;