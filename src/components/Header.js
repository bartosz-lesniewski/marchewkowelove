import "../styles/header.css";
import logo from "../img/marchewki_logo.jpg";
import SearchBar from "./SearchBar.js";

function Header() {
	return (
		<header>
			<img className="logo" src={logo} alt="MarchewkoweLove logo"></img>
			<div className="searchBar">
				<SearchBar />
			</div>
			<div className="links">
				<ul className="linksList">
					<li className="linkList">Przepisy</li>
					<li className="linkList">FB</li>
					<li className="linkList">IG</li>
					<li className="linkList">Login</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
