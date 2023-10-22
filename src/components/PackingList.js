import { useState } from "react";
import List from "./List";

export default function PackingList({
  items,
  onDeleteItems,
  onCheckBoxHandler,
  clearList,
}) {
  const [sortBy, setValue] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <List
            item={item}
            onDeleteItem={onDeleteItems}
            onCheckBoxHandler={onCheckBoxHandler}
            clearList={clearList}
            key={item.id}
          />
        ))}
      </ul>

      <div className="action">
        <select vlaue={sortBy} onChange={(e) => setValue(e.target.value)}>
          <option value="input">Sort by input items</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed items</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}
