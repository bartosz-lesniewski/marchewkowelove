import "./styles/App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddNewArticle from "./components/AddNewArticle";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<main>
					<Switch>
						<Route path="/" exact component={Main} />
						<Route path="/addnewarticle" component={AddNewArticle} />
					</Switch>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
