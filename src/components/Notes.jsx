import React from "react";
import Note from "./Note";
function Notes({ notes, setNotes }) {
	return (
		<div>
			{notes.map((note) => {
				return <Note key={note.id} content={note.text} />;
			})}
		</div>
	);
}

export default Notes;
