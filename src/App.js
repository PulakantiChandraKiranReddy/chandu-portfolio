import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx';

const App = () => {
  return (
      <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          

          <Contact />
          <Footer />
      </>
  )
}

export default App;
