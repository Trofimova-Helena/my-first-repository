import React from 'react';

export default function TextAreaBasic({newNote, setNewNote, val, setVal, doubleNote, setDoubleNote}) {
	let handleTextarea = (event) => {
		if (setVal !== '') {
			setVal(event.target.value);		
		}	
	}

	let handleKeyPressBasic = (event) => {
		if (event.key === 'Enter' && val !== '') {
			setNewNote([...newNote, val]);
			setDoubleNote([...doubleNote, val]);
			setVal('');
		}
	}

	return <textarea
				className="basic textar-style"
				placeholder="введите новую запись и нажмите Enter"
				value={val}
				onChange={handleTextarea}
				onKeyPress={handleKeyPressBasic}
			/>
}