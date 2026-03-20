import { Toaster } from 'sonner';

import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <div className='*:p-0'>
        <Toaster richColors position='bottom-right' theme='system' />
      </div>
    </>
  );
}
