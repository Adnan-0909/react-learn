import { useState } from "react";

function TodoForm({ addTodo }) {

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(text);

        setText("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-3 mb-6"
        >

            <input
                type="text"
                placeholder="Enter Todo..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border rounded-lg px-4 py-2 flex-1"
            />

            <button
                className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700"
            >
                Add
            </button>

        </form>
    );
}

export default TodoForm;