import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme/theme';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { MantineProvider } from '@mantine/styles';
// import { Layout } from './Layout/Layout';
// import { Intro } from './Intro/Intro';
// import { Home } from './Home/Home';
// import { About } from './About/About';
// import { Services } from './Services/Services';
// import { Projects } from './Projects/Projects';
// import { Contact } from './Contact/Contact';

import { Layout, Intro, Home, About, Services, Projects, Contact } from '.';  

function App() {
  return (
    <HelmetProvider>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Intro />} /> {/* Skull intro, icon and title, animate */}
              <Route path="/home" element={<Home />} /> {/* click skull, go to 4 cards view */}
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </MantineProvider>
    </HelmetProvider>
  );
}

export default App;
