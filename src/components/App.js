import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function deleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function checkBoxHandler(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandle={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={deleteItems}
        onCheckBoxHandler={checkBoxHandler}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
