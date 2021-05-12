import React from 'react';

export default function Search({newNote, setNewNote, searchVal, setSearchVal, doubleNote, setDoubleNote}) {
	let handleChange = (event) => {
		let arr = [];
		for(let i = 0; i < newNote.length; i++){
			if(newNote[i].indexOf(event.target.value) !== -1) {
				arr.push(i);
				setSearchVal(arr);
			} 
		}
	}

	let handleKeyPress = (event) => {
		let arr = [];
		if (event.key === 'Enter') {
			if (searchVal !== '') {
				let lengthh = newNote.length;

				for (let elem of searchVal) {
					arr.push(newNote[elem])
				}

				newNote.splice(0, lengthh);
				newNote = arr;
				setNewNote([...newNote]);
					
				event.target.value = '';
			} 
		}		
	}

	let handleClick = (event) => {
		let length = newNote.length;
		newNote.splice(0, length);
		newNote = doubleNote;
		setNewNote([...newNote]);
		setSearchVal('');
		//console.log(newNote);
		//console.log(doubleNote);
	}

	return <div>
			<input placeholder="поиск" onChange={handleChange} onKeyPress={handleKeyPress}/>
			<a href="#" className="space" onClick={handleClick}>вернуть все записи</a>
		</div>
	
}