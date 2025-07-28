import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import ProductDetail from './components/ProductDetail';
import ProductCategoryPage from './pages/ProductCategoryPage';
import { ProductCategory } from './types/product';
import { ROUTES } from './constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.tools} element={<ProductCategoryPage category={ProductCategory.Tools} title="Herramientas" />} />
          <Route path={ROUTES.accessories} element={<ProductCategoryPage category={ProductCategory.Accessories} title="Accesorios" />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <FloatingWhatsAppButton />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
