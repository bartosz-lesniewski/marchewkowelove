import React from "react";

const IsLogged = ({ handleLogout }) => {
	return (
		<section>
			<nav>
				<h2> Jesteś zalogowany</h2>
				<button onClick={handleLogout}>Wyloguj</button>
			</nav>
		</section>
	);
};

export default IsLogged;
