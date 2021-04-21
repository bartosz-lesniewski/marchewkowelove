import "../styles/firstCatWrapper.css";
import rec1cat1 from "../img/recipe1cat1.jpg";
import rec2cat1 from "../img/recipe2cat1.jpg";
import rec3cat1 from "../img/recipe3cat1.jpg";

function FirstCatContainer() {
	return (
		<div className="firstCatWrapper">
			<div className="wrap1">
				<img className="img__1__1" src={rec1cat1}></img>
				<article className="art__1__1">
					This quick vegetarian curry from Heidi Swanson, the vegetarian
					cookbook author and blogger behind 101 Cookbooks, is a great way to
					use a CSA’s bounty of eggplant and summer squash.
				</article>
			</div>
			<div className="wrap2">
				<img className="img__2__1" src={rec2cat1}></img>
				<article className="art__2__1">
					The ras-el-hanout, a Moroccan spice blend featuring aromatic and warm
					spices, adds a smoky depth to the bright citrusy dressing, which soaks
					into the broccoli as it sits.
				</article>
			</div>
			<div className="wrap3">
				<img className="img__3__1" src={rec3cat1}></img>
				<article className="art__3__1">
					This is one of the easiest, most delicious ways to cook down a whole
					head of cabbage until it's falling-apart tender. If the spiced tomato
					paste has reduced and the pan starts getting dry and dark before the
					cabbage is ready...
				</article>
			</div>
		</div>
	);
}

export default FirstCatContainer;
