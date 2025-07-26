import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import ProductDetail from './components/ProductDetail';
import ProductCategoryPage from './pages/ProductCategoryPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<ProductCategoryPage category='tools' title='Herramientas' />} />
          <Route path="/accessories" element={<ProductCategoryPage category='accessories' title='Accesorios' />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <FloatingWhatsAppButton />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
