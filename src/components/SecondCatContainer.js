import "../styles/secondCatWrapper.css";
import rec1cat2 from "../img/recpie1cat2.jpg";
import rec2cat2 from "../img/recipe2cat2.jpg";
import rec3cat2 from "../img/recipe3cat2.jpg";

function SecondCatContainer() {
	return (
		<div className="secondCatWrapper">
			<div className="wrap1">
				<img className="img__1__1" src={rec1cat2}></img>
				<article className="art__1__1">
					Hot pink beet smoothie is refreshing and stunning. A hint of beet with
					berries, citrus and almond butter makes an energizing breakfast.
				</article>
			</div>
			<div className="wrap2">
				<img className="img__2__1" src={rec2cat2}></img>
				<article className="art__2__1">
					A delicious, refreshing, and healthy deep green colada with pineapple,
					coconut milk, and spirulina. Vegan and naurally sweetened.
				</article>
			</div>
			<div className="wrap3">
				<img className="img__3__1" src={rec3cat2}></img>
				<article className="art__3__1">
					A super healthy sip with berries, vanilla, coconut butter & cacao
					powder. The berry beet velvet smoothie makes a hearty and vibrant
					breakfast.
				</article>
			</div>
		</div>
	);
}

export default SecondCatContainer;
