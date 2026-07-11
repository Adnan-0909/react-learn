import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        if (!text.trim()) return;

        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };

        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">

                <h1 className="text-3xl font-bold text-center mb-6">
                    React Todo App
                </h1>

                <TodoForm addTodo={addTodo} />

                <TodoList
                    todos={todos}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />

            </div>
        </div>
    );
}

export default App;