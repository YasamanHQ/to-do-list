import { useState } from "react";

function Input({ onAddTask }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return null;

    const newItem = { id: Date.now(), description, checked: false };
    onAddTask(newItem);

    setDescription("");
  }

  return (
    <form className="relative flex justify-between" onSubmit={handleSubmit}>
      <span disabled className="check cursor-default"></span>
      <input
        type="text"
        className="w-full rounded-md border-none py-3 pl-[90px] pr-5 text-[18px] text-[var(--darker-grayish-blue)] outline-none dark:bg-[var(--darkMode-bg-list)] dark:text-[var(--darkMode-font)]"
        placeholder="Add some tasks to the list..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
}

export default Input;
