
// import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials';
import Experience from './components/experience/Experience'

import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';


function App() {
  return (
    <>
            <Header />
            <Nav />
            <About/>
            <Experience />
            <Services /> 
            <Portfolio/>
            <Testimonials />
            <Contact />
            <Footer />

  
      
    </>
  );
}

export default App;
