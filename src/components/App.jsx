import { Header } from './Header/Header';
import { Gallery } from './Gallery/Gallery';
import { Footer } from './Footer/Footer';
import { Layout } from './Layout/Layout';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        
        <Header />

        <Gallery />

        <Footer />
        
      </Layout>
    </ThemeProvider>
  );
};
