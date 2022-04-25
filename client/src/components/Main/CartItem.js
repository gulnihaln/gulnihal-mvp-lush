import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./styles/CartItem.css";

export default function CartItem({ item, setIsAmountChange, RemoveItemHandle }) {
	const [currentCount, setCurrentCount] = useState(item.count);

	const amountOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	function selectHandle(event) {
		updateStorageCount(item, +event.target.value)
		setTimeout(setCurrentCount(+event.target.value), 0);
		setIsAmountChange((prev) => !prev);
	}
	function deleteHandle() {
		RemoveItemHandle(item.id);
	}
	function updateStorageCount(product, newCount) {
	const cartItemsLocalStorage = JSON.parse(
		localStorage.getItem("cartStorage") || "[]"
		);
		const currentItemIndex = cartItemsLocalStorage.findIndex(
			(product) => product.id === item.id
			);
			cartItemsLocalStorage[currentItemIndex].count = newCount;
			localStorage.setItem(
				"cartStorage",
				JSON.stringify(cartItemsLocalStorage)
			);
	}

	const itemTotalPrice = (item.pricing.priceRange.start.gross.amount.toFixed(2) * currentCount).toFixed(2)
	return (
		<div className="cart-item">
			<Link to={`/product/${item.id}`}>
				<div className="cart-item-img-container">
					<img
						src={item.media[0].url}
						alt={item.productname}
						className={"productImage"}
					/>
				</div>
			</Link>
			<div className="cart-item-explanations">
				<p>{item.name}</p>
				<p>{item.category.name}</p>
				{!item.weight ? (
					<p> size: - </p>
				) :
				<p className="weight">
						{`size: ${item.weight.value} ${item.weight.unit.toLowerCase()}`}
					</p>
				}
				<p className="price">£{itemTotalPrice}</p>
				{/* <p>{item.count}</p> */}
				<select value={currentCount} name="itemCount" onChange={selectHandle}>
					{amountOptions.map((num, index) => {
						return <option key={index}>{num}</option>;
					})}
				</select>
			</div>
			<button className="cart-item-close" onClick={deleteHandle}>
				<MdClose />
			</button>
		</div>
	);
}
