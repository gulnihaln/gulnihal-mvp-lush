import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/Main/CartItem";
// import Loading from "../components/Main/Loading";
import "../pages/styles/Cart.css";


export default function Cart() {
	const [currentCart, setCurrentCart] = useState([]);
	const [isAmountChange, setIsAmountChange] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		setCurrentCart(JSON.parse(localStorage.getItem("cartStorage") || "[]"));
		// console.log(currentCart);
	}, [isAmountChange]);

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	const total = currentCart.reduce((acc, curr) => {
		return acc += curr.count * curr.pricing.priceRange.start.gross.amount;
	}, 0)

	const totalItems = currentCart.reduce((acc, curr) => {
		return (acc += curr.count);
	}, 0);
	
	function HandleCheckout () {
		setIsSubmitting(true);
		setCurrentCart([]);
		localStorage.setItem("cartStorage", JSON.stringify([]));
		// navigate Checkout done!
	}
	
	function RemoveItemHandle (id) {
		const removedItem = currentCart.filter((item) => item.id != id);
		setCurrentCart(removedItem);
		localStorage.setItem("cartStorage", JSON.stringify(removedItem));
	}
	return (
		<>
			{/* <Loading isLoading={isSubmitting} /> */}
			<section className="cart-page">
				<article className="cart-header">
					<h2>Your Bag</h2>
					<p>Items in your bag are not reserved.</p>
				</article>
				<article className="cart-items-container">
					{currentCart.map((item) => {
						return (
							<CartItem
								key={item.id}
								item={item}
								totalItems={totalItems}
								total={total}
								setIsAmountChange={setIsAmountChange}
								RemoveItemHandle={RemoveItemHandle}
							/>
						);
					})}
				</article>
				<article className="cart-summary">
					<p className="summary">Order Summary</p>
					<div className="amount">
						<p>{`${totalItems} item${totalItems > 1 ? "s" : ""}`}</p>
						<p>£ {total.toFixed(2)}</p>
					</div>
					<div className="cart-summary-delivery">
						<p>Delivery</p>
						<p>FREE</p>
					</div>
					<div className="cart-summary-total">
						<p>TOTAL</p>
					</div>
				</article>
				<button className="checkout-btn" onClick={() => HandleCheckout()}>
					CHECKOUT
				</button>
				<Link to="/">
					<button className="checkout-btn continue">
						Continue to Shopping
					</button>
				</Link>
			</section>
		</>
	);
}
