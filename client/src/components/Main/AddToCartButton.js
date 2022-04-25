import "./styles/AddToCartButton.css";
// import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";


export default function AddToCartButton( { node, AddToCartHandle, count, setCount }) {
	

	function addOne() {
		if(count <= 9)
		setCount(count + 1);
	}
	function removeOne() {
		if (count > 1) {
			setCount(count - 1);
		}
	}
	function amountToAdd (count, node){
		return (count * node.pricing.priceRange.start.gross.amount).toFixed(2);
	}
	return (
		<>
			<div className="add-button-container">
				<div className="plus-minus-amount">
					<button className="minus-button" onClick={removeOne}>
						<FiMinus />
					</button>
					<div className="total-item">
						<p>{count}</p>
					</div>
					<button className="plus-button" onClick={addOne}>
						<FiPlus />
					</button>
				</div>
				<button className="add-cart-button" onClick={AddToCartHandle}>
					Add to Cart - £
					{amountToAdd(count, node)}
				</button>
			</div>
		</>
	);
}
