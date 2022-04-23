import "./styles/SingleProduct.css";
import AddToCartButton from "../components/Main/AddToCartButton";
import { gql, useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import ClickAndCollect from "../components/Main/ClickAndCollect";
import { query } from "../utils/getQuery";
// import Weight from "../components/Main/Weight";
import Rating from "../components/Main/Rating";

export default function SingleProduct() {

	const GET_ALL = gql`
		${query}
	`;
	const { loading, error, data } = useQuery(GET_ALL);
	if (error) {
		return <h1> error</h1>;
	}

	if (loading) {
		return <h1> loading </h1>;
	}

	const location = useLocation();
	const path = location.pathname.split("/")[2];


	const arr = data.products.edges.filter(({ node }) => node.id === path);
	const { node } = arr[0];

	//  console.log(products)
	// if(node.weight === null){
	// 	return (
	// 		<p>Each</p>
	// 	);
	// }

	// const hasWeight = node.weight.length > 0;

	// console.log(node);
	return (
		<>
			<div className="product-photo-grid">
				<div className="slide">
					<div className="image-links">
						{node.media.map((img, index) => {
							// console.log(img);
							return <img key={img[index]} src={img.url}></img>;
						})}
					</div>
					<img className="product-img" src={node.media[0].url}></img>
				</div>
				<div className="product">
					<ul>
						<li className="name" key={node.name}>
							{node.name}
						</li>
						<li className="category" key={node.category}>
							{node.category.name.toUpperCase()}
						</li>
						<li
							className="price"
							key={node.pricing.priceRange.start.gross.amount}
						>
							£{node.pricing.priceRange.start.gross.amount}
						</li>
						{node.rating && node.rating !== 0 ? (
							<Rating node={node} />
						) : (
							<Rating isZero={true} />
						)}
						<li
							className={!node.isAvailable ? "disable-availability" : "italic"}
						>
							Available
						</li>
						{node.weight && (
							<li className="weight">
								<button className="weight-button">{`${
									node.weight.value
								} ${node.weight.unit.toLowerCase()}`}</button>
							</li>
						)}
						<li>
							<AddToCartButton node={node} />
							<p>
								Pay later with Klarna. <a href="#">Learn more</a>
							</p>
						</li>
					</ul>
				</div>
				<div className="desc-container">
					<h2 className="description-title" key="description-title">
						{" "}
						DESCRIPTION{" "}
					</h2>
					<section className="product-info">
						<ul>
							{/* <li className="price">{node.rating} /100</li> */}
							{/* <li className="type" key={node.id}>{node.productType.name}</li> */}
							{/* <li className="category" key={node.id}>
							{node.category.name}
						</li> */}
							<li className="description" key={node.seoDescription}>
								{node.seoDescription}{" "}
							</li>
							{/* <FaLeaf /> */}
						</ul>
					</section>
				</div>
				<section className="return-click-collect">
					<ClickAndCollect />
				</section>
			</div>
		</>
	);
}
