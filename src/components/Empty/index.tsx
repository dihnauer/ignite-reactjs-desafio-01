import styles from './styles.module.css';

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src='/clipboard.png' alt='Clipboard' />

      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
