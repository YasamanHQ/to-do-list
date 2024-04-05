function Task({ task, onDeleteTask, onToggleTask }) {
  return (
    <li className="group flex cursor-pointer items-center justify-between border-b-[1px] border-b-[var(--lighter-grayish-blue)] p-4 dark:border-b-[var(--darkMode-item-border)]">
      <div className="relative pl-[90px]">
        <span
          onClick={() => onToggleTask(task.id)}
          className={`check ${task.checked && `bg-gradient-to-r from-[#57ddff] to-[#c058f3]	before:content-['✓']`}`}
        ></span>

        <span
          className={
            task.checked
              ? "text-[var(--dark-grayish-blue)] line-through dark:text-[var(--darkMode-task-done)]"
              : "text-[var(--darker-grayish-blue)] dark:text-[var(--darkMode-font)]"
          }
        >
          {task.description}
        </span>
      </div>

      <span
        onClick={() => onDeleteTask(task.id)}
        className="hidden cursor-pointer text-[var(--dark-grayish-blue)] transition duration-300 group-hover:inline-block hover:text-[var(--delete)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.75em"
          height="1.75em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12L5.47 6.53a.75.75 0 0 1 0-1.06"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </li>
  );
}

export default Task;
