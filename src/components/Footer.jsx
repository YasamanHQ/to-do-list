function Footer({ tasks, onDeleteAll, onFilter, isSelected, tasksListFilter }) {
  return (
    <div className="flex items-center justify-between px-3 py-3 text-sm text-[var(--dark-grayish-blue)]">
      <span className="cursor-default">{tasks.length} items left</span>

      <div className="hidden gap-4 sm:flex">
        {tasksListFilter.map((filter, i) => (
          <button
            // value={filter}
            onClick={() => {
              onFilter(filter);
            }}
            className={`cursor-pointer transition duration-300 hover:text-[var(--darker-grayish-blue)] dark:hover:text-[var(--darkMode-footer-hover)] ${isSelected === filter ? "text-[#3a7bfd]" : ""}`}
            key={filter[i]}
          >
            {filter}
          </button>
        ))}
      </div>

      <span
        onClick={onDeleteAll}
        className="cursor-pointer transition duration-300 hover:text-[var(--darker-grayish-blue)] dark:hover:text-[var(--darkMode-footer-hover)]"
      >
        Clear All
      </span>
    </div>
  );
}

export default Footer;
