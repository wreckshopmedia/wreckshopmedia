import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { MantineProvider } from '@mantine/styles';

import { Home } from './Home/Home';
import { About } from './About/About';
import { Contact } from './Contact/Contact';

function App() {
  return (
    <HelmetProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </MantineProvider>
    </HelmetProvider>
  );
}

export default App;
