import Footer from 'components/Footer';
import Menu from 'components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Cardapio = lazy(() => import('pages/Cardapio'));
const DefaultPage = lazy(() => import('components/DefaultPage'));
const Inicio = lazy(() => import('pages/Inicio'));
const NotFound= lazy(() => import('pages/NotFound'));
const Prato = lazy(() => import('pages/Prato'));
const Sobre = lazy(() => import('pages/Sobre'));

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
