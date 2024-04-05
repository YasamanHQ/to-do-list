import { useEffect, useState } from "react";
import Footer from "./Footer";
import Task from "./Task";

const tasksListFilter = ["All", "Active", "Completed"];

function List({ tasks, onDeleteTask, onDeleteAll, onToggleTask }) {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isSelected, setIsSelected] = useState("All");

  function handleFiltering(filterCategory) {
    if (filterCategory === "All") {
      setFilteredTasks([...tasks]);
      setIsSelected("All");
    }

    if (filterCategory === "Active") {
      tasks.map((task) => {
        if (!task.checked) {
          setFilteredTasks(() => tasks.filter((task) => !task.checked));
          setIsSelected("Active");
        }
      });
    }

    if (filterCategory === "Completed") {
      tasks.map((task) => {
        if (task.checked) {
          setFilteredTasks(() => tasks.filter((task) => task.checked));
          setIsSelected("Completed");
        }
      });
    }
  }

  useEffect(() => {
    setFilteredTasks([...tasks]);
    setIsSelected("All");
  }, [tasks]);

  return (
    <>
      {filteredTasks.length ? (
        <>
          <div className="scrollbar-thumb-[var(--dark-grayish-blue)] flex h-[350px] flex-col justify-between overflow-y-auto rounded-md bg-[var(--light-gray)] text-[16px] shadow-lg scrollbar-thin scrollbar-track-gray-100 dark:bg-[var(--darkMode-bg-list)]">
            <ul>
              {filteredTasks.map((task) => (
                <Task
                  task={task}
                  key={task.id}
                  onDeleteTask={onDeleteTask}
                  onToggleTask={onToggleTask}
                />
              ))}
            </ul>

            <Footer
              tasks={tasks}
              onDeleteAll={onDeleteAll}
              onFilter={handleFiltering}
              isSelected={isSelected}
              tasksListFilter={tasksListFilter}
            />
          </div>

          <div className="flex justify-center gap-4 rounded-md bg-[var(--light-gray)] p-3 text-[16px] shadow-lg dark:bg-[var(--darkMode-bg-list)] sm:hidden">
            {tasksListFilter.map((filter, i) => (
              <button
                onClick={() => {
                  handleFiltering(filter);
                }}
                className={`cursor-pointer transition duration-300 hover:text-[var(--darker-grayish-blue)] dark:hover:text-[var(--darkMode-footer-hover)] ${isSelected === filter ? "text-[#3a7bfd]" : ""}`}
                key={filter[i]}
              >
                {filter}
              </button>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default List;
