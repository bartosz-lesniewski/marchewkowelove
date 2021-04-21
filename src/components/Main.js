import "../styles/main.css";
import SignInUp from "./SignInUp";
import FirstCatContainer from "./FirstCatContainer";

function Main() {
	return (
		<main>
			<h1>MarchewkoweLove</h1>
			<div className="slider">slider</div>
			<div className="firstCategoryContainer">
				<FirstCatContainer />
			</div>
			<div className="secondCategoryContainer">secondCatContainer</div>
			<div className="lastAdded">last added</div>
			<div className="signInUp">
				<SignInUp />
			</div>
		</main>
	);
}

export default Main;
