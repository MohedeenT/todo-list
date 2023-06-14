import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/title";
import Form from "./components/form";
import Items from "./components/items";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState(()=>{ 
  const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) {
      return []
    }
    
    return JSON.parse(localValue)
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Title />

      <div className="container">
        <Form setNewItem={setNewItem} newItem={newItem} setTodos={setTodos} />

        <Items todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
