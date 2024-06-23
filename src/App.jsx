import React, { useState } from "react";
import Notes from "./components/Notes";
function App() {
	const [notes, setNotes] = useState([
		{ id: 1, text: "Hi" },
		{ id: 2, text: "Hello" },
	]);

	return (
		<div className=" bg-yellow-300">
			<Notes notes={notes} setNotes={setNotes} />
		</div>
	);
}

export default App;
