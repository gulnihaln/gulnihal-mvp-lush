import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/styles/Cart.css";


export default function Cart() {
	const [allInCart, setAllInCart] = useState([]);

	// const allCart = allInCart.map((item) => (
	// 	<CartItem
	// 		key={product.productid}
	// 		product={product}
	// 	/>
	// ));
	return (
		<>
			<section className="cart-page">
				<article className="cart-header">
					<h2>Your Bag</h2>
					<p>Items in your bag are not reserved.</p>
				</article>
				<article className="cart-items-container">{allInCart}</article>
				<article className="cart-summary">
					<p className="summary">Order Summary</p>
					<div className="amount">
						<p>{`${allInCart.length} item${
							allInCart.length > 1 ? "s" : ""
						}`}</p>
						<p>£ 00.00</p>
					</div>
					<div className="cart-summary-delivery">
						<p>Delivery</p>
						<p>FREE</p>
					</div>
					<div className="cart-summary-total">
						<p>TOTAL</p>
					</div>
				</article>
				<button className="checkout-btn">CHECKOUT</button>
				<Link to="/all">
					<button className="checkout-btn continue">
						Continue to Shopping
					</button>
				</Link>
			</section>
		</>
	);
}
