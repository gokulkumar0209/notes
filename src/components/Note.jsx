import React from "react";

function Note({ id, content }) {
	return (
		<div
			className=" absolute left-0 top-0  border border-solid border-black select-none p-10 w-max cursor-move
          bg-yellow-100 "
		>
			{content}
		</div>
	);
}

export default Note;
