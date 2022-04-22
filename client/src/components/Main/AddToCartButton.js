import "./styles/AddToCartButton.css";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"

export default function AddToCartButton( { node }) {

	const [order, setOrder] = useState(1);
	function addOne() {
		setOrder(order + 1);
	}
	function removeOne() {
		if (order > 1) {
			setOrder(order - 1);
		}
	}
	function amountToAdd (order, node){
		return (order * node.pricing.priceRange.start.gross.amount).toFixed(2);
	}
	return (
		<>
			<div className="add-button-container">
				<div className="plus-minus-amount">
					<button className="minus-button" onClick={removeOne}>
						<FiMinus />
					</button>
					<div className="total-item">
						<p>{order}</p>
					</div>
					<button className="plus-button" onClick={addOne}>
						<FiPlus />
					</button>
				</div>
				<button className="add-cart-button">
					Add to Cart - £
					{amountToAdd(order, node)}
				</button>
			</div>
		</>
	);
}
