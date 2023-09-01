import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src='/rocket.svg' alt='' />
      <div>
        <span>to</span>
        <span>do</span>
      </div>
    </header>
  );
}
