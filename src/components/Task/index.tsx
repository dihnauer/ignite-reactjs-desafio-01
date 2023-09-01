import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash2 } from 'lucide-react';

import styles from './styles.module.css';

interface TaskProps {
  id: string;
  task: string;
  done: boolean;
  onDelete: (id: string) => void;
  onDone: (id: string) => void;
}

export function Task({ id, task, done = false, onDelete, onDone }: TaskProps) {
  return (
    <div className={styles.task}>
      <Checkbox.Root
        id={id}
        className={styles.checkbox}
        checked={done}
        onCheckedChange={() => onDone(id)}
      >
        <Checkbox.Indicator className={styles.indicator}>
          <Check />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor={id}>{task}</label>
      <button type='button' className={styles.delete} onClick={() => onDelete(id)}>
        <Trash2 />
      </button>
    </div>
  );
}
