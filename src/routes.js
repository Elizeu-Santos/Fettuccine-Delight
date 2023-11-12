import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './Routes.module.scss';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <header className={styles.header}>
          <div className={styles.header__text}>Welcome to the Fusion Restaurant Hub</div>
        </header>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='cardapio' element={<Cardapio />} />
        </Routes>
      </Router>
    </main>
  );
}