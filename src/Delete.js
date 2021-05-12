import React from 'react';

export default function Delete({newNote, setNewNote, index, doubleNote, setDoubleNote, searchVal}) {
	let handleDelete = (event) => {
		newNote.splice(index, 1);
		setNewNote([...newNote]);
		doubleNote.splice(searchVal[index], 1);
		setDoubleNote([...newNote])
		console.log(newNote);
	}

	return <a href="#" onClick={handleDelete}>delete</a>
}