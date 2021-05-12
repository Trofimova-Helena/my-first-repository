import React from 'react';
import './App.css';
import CreateNote from './CreateNote.js';

function App() {
  return (
  	<div className="for-background">
	    <div className="container">
	      <CreateNote/>
	    </div>
    </div> // div for background
  );
}

export default App;


// Реализовать блокнот для записей. Он будет представлять собой текстареа, в которую можно записывать текст. Слева от текстареа должен 
// быть список созданных записей в виде меню. По нажатию на пункт меню можно посмотреть текст записи (прямо в текстареа) и при 
// необъодимости отредактировать ее. Добавить функционал по удалению записей. Реализовать поиск записей.