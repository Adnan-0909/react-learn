import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo }) {

    return (
        <div className="space-y-3">

            {todos.length === 0 ? (
                <p className="text-center text-gray-500">
                    No Todos Yet
                </p>
            ) : (
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                ))
            )}

        </div>
    );
}

export default TodoList;