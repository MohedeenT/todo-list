export default function Items({ todos, setTodos }){
    function deleteTodo(id) {
        setTodos((currentTodos) => {
          return currentTodos.filter((todo) => todo.id !== id);
        });
      }
    return (
        <>
            <div className="items">
            <h2>My Items</h2>
            <ol>
                {todos.length === 0 && (
                <h4 style={{ textAlign: "center", color: "red" }}>No items</h4>
                )}
                {todos.map((todo) => (
                <li key={todo.id}>
                    <h3>{todo.title}</h3>
                    <button
                    className="delete"
                    onClick={() => deleteTodo(todo.id)}
                    ></button>
                </li>
                ))}
            </ol>
            </div>
        </>
    )
}