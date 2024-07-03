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
		console.log(e.target.value);
	};

	return (
		<div className="App">
			<header>
				<h2>Todoリスト</h2>
				<form onSubmit={() => {}}>
					<input type="text" onChange={(e) => handleChange(e)} />
					<input type="button" value="作成" />
				</form>
			</header>
		</div>
	);
}

export default App;
