import styles from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';

export default function DefaultPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Welcome to the Fusion Restaurant Hub
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}