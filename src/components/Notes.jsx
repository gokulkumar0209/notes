import React, { createRef, useEffect, useRef } from "react";
import Note from "./Note";
function Notes({ notes = [], setNotes }) {
	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
		const updatedNotes = notes.map((note) => {
			const savedNote = savedNotes.find((n) => (n.id = note.id));
			if (savedNote) {
				return { ...note, position: savedNote.position };
			} else {
				const position = determinePosition();
				return { ...note, position };
			}
		});
		setNotes(updatedNotes);
		localStorage.setItem("notes", JSON.stringify(updatedNotes));
	}, [notes.length]);
	const noteRefs = useRef({});
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
				return (
					<Note
						key={note.id}
						ref={
							noteRefs.current[note.id]
								? noteRefs.current[note.id]
								: (noteRefs.current[note.id] = createRef)
						}
						inpos={note.position}
						content={note.text}
					/>
				);
			})}
		</div>
	);
}

export default Notes;
