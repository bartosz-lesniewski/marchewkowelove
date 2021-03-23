import "../styles/main.css";
import SignInUp from "./SignInUp";

function Main() {
	return (
		<main>
			<h1>MarchewkoweLove</h1>
			<div className="slider">slider</div>
			<div className="firstCategoryContainer">firstCatContainer</div>
			<div className="secondCategoryContainer">secondCatContainer</div>
			<div className="lastAdded">last added</div>
			<div className="signInUp">
				<SignInUp />
			</div>
		</main>
	);
}

export default Main;
