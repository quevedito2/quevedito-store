import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Accessories from './pages/Accessories';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <FloatingWhatsAppButton />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
