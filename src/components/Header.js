import "../styles/header.css";
import logo from "../img/marchewki_logo.jpg";
import SearchBar from "./SearchBar.js";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<Link to="/">
				<img className="logo" src={logo} alt="MarchewkoweLove logo" />
			</Link>
			<div className="searchBar">
				<SearchBar />
			</div>
			<div className="links">
				<ul className="linksList">
					<li className="linkList">Przepisy</li>
					<li className="linkList">FB</li>
					<li className="linkList">IG</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
