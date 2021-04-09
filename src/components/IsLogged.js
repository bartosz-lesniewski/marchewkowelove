import React from "react";

const IsLogged = ({ handleLogout }) => {
	return (
		<section>
			<nav>
				<h2> Jesteś zalogowany</h2>
				<button onClick={handleLogout}>Wyloguj</button>
				<button>Panel użytkownika</button>
				<button>Dodaj nowy artykuł</button>
				<button>Edytuj swoje artykuły</button>
			</nav>
		</section>
	);
};

export default IsLogged;
