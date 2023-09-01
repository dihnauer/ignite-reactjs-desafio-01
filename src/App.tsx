import { FormEvent, useState } from 'react';
import { PlusCircle } from 'lucide-react';

import { Header } from './components/Header';
import { Task } from './components/Task';
import { Empty } from './components/Empty';

import styles from './styles/app.module.css';

interface TaskProps {
  id: string;
  task: string;
  done: boolean;
}

export function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.done === true);
  const totalDoneTasks = doneTasks.length;

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: String(new Date().getTime()),
      task,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTask('');
  }

  function handleDeleteTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  }

  function handleToggleTaskDone(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />

      <main className={styles.container}>
        <form className={styles.input} onSubmit={handleNewTask}>
          <input
            type='text'
            placeholder='Adicione uma nova tarefa'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type='submit'>
            Criar
            <PlusCircle />
          </button>
        </form>

        <div className={styles.tasks}>
          <div className={styles.infos}>
            <div className={styles.created}>
              <strong>Tarefas criadas</strong>
              <span>{totalTasks}</span>
            </div>

            <div className={styles.done}>
              <strong>Concluídas</strong>
              <span>
                {totalDoneTasks} de {totalTasks}
              </span>
            </div>
          </div>

          {tasks.length === 0 ? (
            <Empty />
          ) : (
            <ul className={styles.taskWrapper}>
              {tasks.map(({ id, task, done }) => {
                return (
                  <li key={id}>
                    <Task
                      id={id}
                      task={task}
                      done={done}
                      onDelete={handleDeleteTask}
                      onDone={handleToggleTaskDone}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
