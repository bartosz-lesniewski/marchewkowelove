import React from "react";

function AddNewArticle() {
	return (
		<div>
			<label for="article--title">Tytuł:</label>
			<input
				className="article--title"
				placeholder="Tutaj wpisz tytuł artykułu:"
				required
			/>
			<label for="article--lid">Lid:</label>
			<input
				className="article--lid"
				placeholder="Tutaj wpisz akapit wprowadzający:"
				required
			/>
			<label for="article--content">Treść:</label>
			<input
				className="article--content"
				placeholder="Tutaj wpisz treść właściwą artykułu:"
				required
			/>
			<button>Opublikuj</button>
		</div>
	);
}

export default AddNewArticle;
