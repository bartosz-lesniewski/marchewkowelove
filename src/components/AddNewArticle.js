import React from "react";

function AddNewArticle() {
	return (
		<div>
			<h3>Tytuł:</h3>
			<input placeholder="Tutaj wpisz tytuł artykułu:" />
			<h3>Lid:</h3>
			<input placeholder="Tutaj wpisz akapit wprowadzający:" />
			<h3>Treść:</h3>
			<input placeholder="Tutaj wpisz treść właściwą artykułu:" />
			<button>Opublikuj</button>
		</div>
	);
}

export default AddNewArticle;
