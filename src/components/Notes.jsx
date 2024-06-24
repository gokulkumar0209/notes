import React, { useEffect } from "react";
import Note from "./Note";
function Notes({ notes, setNotes }) {
	useEffect(() => {
		const savedNotes = [];
		const updatedNotes = notes.map((note) => {
			const savedNote = null;
			if (savedNote) {
				return note;
			} else {
				const position = determinePosition();
				return { ...note, position };
			}
		});
		setNotes(updatedNotes);
	}, []);

	const determinePosition = () => {
		const maxX = window.innerWidth - 250;
		const maxY = window.innerHeight - 250;
		return {
			x: Math.floor(Math.random() * maxX),
			y: Math.floor(Math.random() * maxY),
		};
	};

	return (
		<div>
			{notes.map((note) => {
				return <Note key={note.id} inpos={note.position} content={note.text} />;
			})}
		</div>
	);
}

export default Notes;
