import React from 'react';
import Delete from './Delete.js';

export default function CreateList({newNote, setNewNote, doubleNote, setDoubleNote, searchVal}) {
	let handleEdit = (event) => {
		let additional = document.querySelector('.additional');
		let basic = document.querySelector('.basic');
		let index = event.target.closest('li').getAttribute('data-index');
		let textArrIndex = event.target.closest('ul').parentElement.nextElementSibling.lastElementChild;
		textArrIndex.setAttribute('data-index', index);

		basic.classList.add('disp-none');
		additional.classList.remove('disp-none');
		additional.classList.add('disp-block');
		additional.value = event.target.innerHTML;
	}

	let lis = newNote.map((elem, index) => {
		return <li key={index} data-index={index} className="list-decor">
					<div className="title">
						<span onClick={handleEdit} className="text">{elem}</span>
						<Delete 
							newNote={newNote}
							setNewNote={setNewNote}
							index={index}
							doubleNote={doubleNote}
							setDoubleNote={setDoubleNote}
							searchVal={searchVal}
						/>
					</div>
				</li>
	})

	return <ul>{lis}</ul>
}