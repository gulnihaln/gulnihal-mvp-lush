import "./styles/ProductCard.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";


export default function ProductCard ({ node }) {
	const hasImage = node.media.length > 0;
	
    return (
			<>
				<Link
					to={`/product/${node.id}`}
					style={{ textDecoration: "none" }}
				>
					<div className="product-card">
						{!hasImage ? <img className="card-img" src="https://twstg2.eu.saleor.cloud/media/products/phsa1gix8o2qbwe.jpg"></img>
						:
						<img className="card-img" src={node.media[0].url}></img>
						}
						<article className="product-card-details">
							<h2 className="product-name">{node.name}</h2>
							{(node.rating && node.rating !== 0) ? <Rating node={node} /> : <Rating  isZero={true}/>}
							<h3>£ {node.pricing.priceRange.start.gross.amount.toFixed(2)}</h3>
						</article>
						<button className="add-cart">Add to Cart</button>
					</div>
				</Link>
			</>
		);

}