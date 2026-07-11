function TodoItem({ todo, deleteTodo, toggleTodo }) {

    return (
        <div className="flex justify-between items-center border rounded-lg p-3">

            <div className="flex items-center gap-3">

                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />

                <span
                    className={`${
                        todo.completed
                            ? "line-through text-gray-400"
                            : ""
                    }`}
                >
                    {todo.text}
                </span>

            </div>

            <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
                Delete
            </button>

        </div>
    );
}

export default TodoItem;