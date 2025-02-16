import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState<Todo[]>([]);

	type Todo = {
		inputValue: string;
		id: number;
		checked: boolean;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(e.target.value);
		setInputValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// 新規Todo作成
		const newTodo: Todo = {
			inputValue: inputValue,
			id: todos.length,
			checked: false,
		}

		setTodos([newTodo, ...todos]);
		setInputValue("");
	};

	const handleEdit = (id: number, inputValue: string) => {
		const newTodos = todos.map((todo) => {
			if(todo.id === id) {
				todo.inputValue = inputValue;
			}
			return todo;
		});

		setTodos(newTodos);
	}

	const handleChecked = (id: number, checked: boolean) => {
		const newTodos = todos.map((todo) => {
			if(todo.id === id) {
				todo.checked = !todo.checked;
			}
			return todo;
		});
		setTodos(newTodos);
	}

	const handleDelete = (id: number) => {
		const newTodos = todos.filter((todo) => todo.id !== id) ;
		setTodos(newTodos);
	}

	return (
		<div className="App">
			<div>
				<h2>Todoリスト</h2>
				<form onSubmit={(e) => handleSubmit(e)} >
					<input type="text" onChange={(e) => handleChange(e)} />
					<input type="submit" value="作成" />
				</form>
				<ul>
					{todos.map((todo) => (
						<li key={todo.id}>
							<input
								type="text"
								onChange={(e) => handleEdit(todo.id, e.target.value)}
								value={todo.inputValue}
								disabled={todo.checked}
							/>
							<input
								type="checkbox"
								onChange={() => handleChecked(todo.id, todo.checked)}
							/>
							<button onClick={() => handleDelete(todo.id)}>削除</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
