import React from "react";

function Note({ inpos, content }) {
	// Check if inpos is defined before accessing its properties
	if (!inpos) {
		return null; // or handle the case where inpos is not defined
	}

	return (
		<div
			className="note absolute border border-solid border-black select-none p-10 w-max cursor-move bg-yellow-100"
			style={{ left: `${inpos.x}px`, top: `${inpos.y}px` }}
		>
			{content}
		</div>
	);
}

export default Note;
