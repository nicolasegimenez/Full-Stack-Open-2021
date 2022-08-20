import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";
import "./index.css";
import Notification from "./components/Notification";
const App = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState("");
	const [showAll, setShowAll] = useState(true);
	const [errorMessage, setErrorMessage] = useState(
		"some Error happened"
	);

	useEffect(() => {
		noteService.getAll().then((initialNotes) => {
			setNotes(initialNotes);
		});
	}, []);
	useEffect(() => {
		noteService.getFake().then((response) => {
			setNotes(response);
		});
	}, []);

	const toggleImportanceOf = (id) => {
		const note = notes.find((n) => n.id === id);
		const changedNote = {
			...note,
			important: !note.important,
		};

		noteService
			.update(id, changedNote)
			.then((returnedNote) => {
				setNotes(
					notes.map((note) =>
						note.id !== id
							? note
							: returnedNote
					)
				);
			})
			.catch(() => {
				setErrorMessage(
					`the note "${note.content}" was already deleted from server  `
				);
				setTimeout(() => {
					setErrorMessage(null);
				}, 5000);
				setNotes(notes.filter((n) => n.id !== id));
			});
	};

	const addNote = (event) => {
		event.preventDefault();
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
			id: noteObject.length() + 1,
		};

		noteService.create(noteObject).then((response) => {
			setNotes(notes.concat(response.data));
			setNewNote("");
		});
	};
	const handleNoteChange = (event) => {
		setNewNote(event.target.value);
	};

	const notesToShow = showAll
		? notes
		: notes.filter((note) => note.important);

	const Footer = () => {
		const footerStyle = {
			color: "green",
			fontStyle: "italic",
			fontSize: 16,
		};
		return (
			<div style={footerStyle}>
				<br />
				<em>
					Note app, Departament of Compunter
					Science, University of Helsinki
				</em>
			</div>
		);
	};

	return (
		<div>
			<h1>Notes</h1>
			<Notification message={errorMessage} />
			<div>
				<button
					onClick={() =>
						setShowAll(!showAll)
					}
				>
					show{" "}
					{showAll ? "important" : "all"}
				</button>
			</div>
			<ul>
				{notesToShow.map((note, i) => (
					<Note
						key={i}
						note={note}
						toggleImportance={() =>
							toggleImportanceOf(
								note.id
							)
						}
					/>
				))}
			</ul>
			<form onSubmit={addNote}>
				<input
					value={newNote}
					onChange={handleNoteChange}
				/>
				<button type="submit"> save </button>
			</form>
			<Footer />
		</div>
	);
};

export default App;
