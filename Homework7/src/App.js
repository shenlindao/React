import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './redux/tasksSlice';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const status = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);
  return (
    <div className="App">
      <h1>Список задач</h1>
      {status === "loading" && <p>Загрузка...</p>}
      {status === "failed" && <p>Ошибка: {error}</p>}
      {status === "succeeded" && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} {task.completed ? "(Завершено)" : "(В процессе)"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
