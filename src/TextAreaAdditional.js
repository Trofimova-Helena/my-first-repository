import React from 'react';

export default function TextAreaAdd({newNote, setNewNote, val, setVal, doubleNote, setDoubleNote, searchVal}) {
	let handleClickAdd = (event) => {
		setVal(event.target.value);
	}

	let handleChangeAdd = (event) => {
		setVal(event.target.value);
	}

	let handleKeyPressAdd = (event) => {
		let index = event.target.getAttribute('data-index');
		let additional = document.querySelector('.additional');
		let basic = document.querySelector('.basic');
	
		if (event.key === 'Enter') {
			newNote.splice(index, 1, val);
			setNewNote([...newNote]);

			console.log(searchVal[index])
			doubleNote.splice(searchVal[index], 1, val) // searchVal - чтобы корректно производилась замена в стейте.

			setDoubleNote([...doubleNote]);

			additional.classList.remove('disp-block');
			additional.classList.add('disp-none');
			basic.classList.remove('disp-none');
			setVal('');
		}
	}

	return <textarea
				className="additional textar-style disp-none"
				onClick={handleClickAdd}
				onChange={handleChangeAdd}
				onKeyPress={handleKeyPressAdd}
			/>
}