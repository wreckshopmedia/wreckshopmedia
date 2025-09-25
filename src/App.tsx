import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useColorScheme } from '@mantine/hooks';
import { theme } from './theme/theme';
import { HelmetProvider } from 'react-helmet-async';
import { MantineProvider } from '@mantine/styles';
import { Layout, Intro, Home, About, Services, Projects, Contact } from '.';

function App() {
  const colorScheme = useColorScheme();

  return (
    <HelmetProvider>
      <MantineProvider theme={{ ...theme, colorScheme }} withGlobalStyles withNormalizeCSS>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Intro />} />
              <Route path="/home" element={<Home />} />
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
