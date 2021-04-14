import "../styles/addnewarticle.css";
import React from "react";

function AddNewArticle() {
	return (
		<div className="article--container">
			<form className="title--container">
				<label for="article--title">Tytuł:</label>
				<input
					className="article--title"
					placeholder="Tutaj wpisz tytuł artykułu:"
					required
				/>
			</form>
			<form className="lid--container">
				<label for="article--lid">Lid:</label>
				<input
					className="article--lid"
					placeholder="Tutaj wpisz akapit wprowadzający:"
					required
				/>
			</form>
			<form className="content--container">
				<label for="article--content">Treść:</label>
				<input
					className="article--content"
					placeholder="Tutaj wpisz treść właściwą artykułu:"
					required
				/>
			</form>
			<button>Opublikuj</button>
		</div>
	);
}

export default AddNewArticle;
