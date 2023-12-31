import styles from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';

export default function DefaultPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
        Fettuccine Delight
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </>
  );
}