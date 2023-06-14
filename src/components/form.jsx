export default function Form({ newItem, setNewItem, setTodos }){

    function handleSubmit(e) {
        e.preventDefault();
    
        setTodos((currentTodos) => {
          return [
            ...currentTodos,
            {
              id: crypto.randomUUID(),
              title: newItem,
            },
          ];
        });
        setNewItem("")
      }
    return (
    <>
        <form onSubmit={handleSubmit}>
            <h2>Add Item</h2>

            <input
            type="text"
            id="title"
            placeholder="Title"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="form-control"
            autoComplete="off"
            />

            <button>Add</button>
        </form>
      </>
      )
}