import React, { useState } from 'react';
import CreateList from './CreateList.js';
import TextAreaBasic from './TextAreaBasic.js';
import TextAreaAdditional from './TextAreaAdditional.js';
import Search from './Search.js';

export default function CreateNote() {
	let [newNote, setNewNote] = useState(['для создания новой записи введите ее в поле и нажмите Enter']); // Основной стейт
	let [doubleNote, setDoubleNote] = useState(['для создания новой записи введите ее в поле и нажмите Enter']); // Дублирует основной стейт, чтобы при поиске не терять весь массив. 
	let [val, setVal] = useState(''); // для редактирования
	let [searchVal, setSearchVal] = useState(''); // для поиска

	return ( 
			<div>
				<div className="find">
					<Search
						newNote={newNote}
						setNewNote={setNewNote} 
						searchVal={searchVal}
						setSearchVal={setSearchVal}
						doubleNote={doubleNote}
						setDoubleNote={setDoubleNote}	
					/>
				</div>
				<div className="main-menu">
					<div>
						<CreateList
							newNote={newNote}
							setNewNote={setNewNote}
							doubleNote={doubleNote}
							setDoubleNote={setDoubleNote}	
							searchVal={searchVal}
						/>
					</div>

					<div>
						<TextAreaBasic
							newNote={newNote}
							setNewNote={setNewNote}
							val={val}
							setVal={setVal}	
							doubleNote={doubleNote}
							setDoubleNote={setDoubleNote}		
						/>

						<TextAreaAdditional
							newNote={newNote}
							setNewNote={setNewNote}
							val={val}
							setVal={setVal}
							doubleNote={doubleNote}
							setDoubleNote={setDoubleNote}
							searchVal={searchVal}
							setSearchVal={setSearchVal}					
						/>
					</div>
				</div>
			</div>

		)
}