import { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import List from "./List";

export function ToDoList({ toggleTheme, theme }) {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    if (confirm(`Are you sure you want to delete this task?`)) {
      setTasks((tasks) => tasks.filter((task) => task.id !== id));
    }
  }

  function handleDeleteAll() {
    if (confirm("Are you sure you want to delete all your tasks?"))
      setTasks([]);
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task,
      ),
    );
  }

  return (
    <div className="fixed bottom-12 left-[50%] top-12 flex w-[80%] translate-x-[-50%] flex-col gap-y-10 md:w-[60%] lg:w-[40%]">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Input onAddTask={handleAddTask} />
      <List
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onDeleteAll={handleDeleteAll}
        onToggleTask={handleToggleTask}
      />
    </div>
  );
}
