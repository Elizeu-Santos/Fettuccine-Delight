import Footer from 'components/Footer';
import DefaultPage from 'components/DefaultPage';
import Menu from 'components/Menu';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import { lazy, Suspense } from 'react';

const Cardapio = lazy(() => import('pages/Cardapio'));

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Suspense>
          <Menu />
          <Routes>
            <Route path="/" element={<DefaultPage />}>
              <Route index element={<Inicio />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="sobre" element={<Sobre />} />
            </Route>
            <Route path="prato/:id" element={<Prato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </main>
  );
}
