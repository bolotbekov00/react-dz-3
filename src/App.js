import './App.css';
import {useState} from "react";

function App() {
    const [write, setWrite] = useState("напиши что-то");
    const [add, setAdd] = useState([]);

    const addTodo = () => {
        const newAdd = {
            span: write,
        };
        setAdd([...add, newAdd]);
    };

    return (
        <div className="App">
            <input
                type="text"
                value={write}
                onChange={(event) => setWrite(event.target.value)}
            />
            <button onClick={addTodo}>Добавить</button>
            <div className="block-todo">
                {add.map((e, index) => (
                    <div className="todo-card" key={index}>
                        <h1>Надо это сделать!!</h1>
                        <span>{e.span}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
