import React from "react";
import { Link } from "react-router-dom";

const IsLogged = ({ handleLogout }) => {
	return (
		<section>
			<nav>
				<h2> Jesteś zalogowany</h2>
				<button onClick={handleLogout}>Wyloguj</button>
				<button>Panel użytkownika</button>
				<Link to="/addnewarticle">
					<button>Dodaj nowy artykuł</button>
				</Link>
				<button>Edytuj swoje artykuły</button>
			</nav>
		</section>
	);
};

export default IsLogged;
