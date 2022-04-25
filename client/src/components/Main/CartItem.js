import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./styles/CartItem.css";

export default function CartItem({ item, setIsAmountChange, RemoveItemHandle, total }) {
	const [currentCount, setCurrentCount] = useState(item.count);
	// const [currentPrice, setCurrentPrice] = useState(total)

	const amountOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	function selectHandle(event) {
		//find product from local storage and update amount
		// updateStorageCount(item, +event.target.value)
		setTimeout(setCurrentCount(+event.target.value), 0);
		setIsAmountChange((prev) => !prev);
	}
	function deleteHandle() {
		RemoveItemHandle(item.id);
	}
	// function updateStorageCount(product, newCount) {
	// const cartItemsLocalStorage = JSON.parse(
	// 	localStorage.getItem("currentCart") || "[]"
	// );
	// const currentItemIndex = cartItemsLocalStorage.findIndex(
	// 	(product) => product.id === item.id
	// );
	// cartItemsLocalStorage[currentItemIndex].count = newCount;
	// localStorage.setItem("currentCart", JSON.stringify(cartItemsLocalStorage));
	// }

	return (
		<div className="cart-item">
			<div className="cart-item-img-container">
				<img
					src={item.media[0].url}
					alt={item.productname}
					className={"productImage"}
				/>
			</div>
			<div className="cart-item-explanations">
				<p>{item.name}</p>
				<p>{item.category.name}</p>
				{/* <p>size: {item.weight.value}</p> */}
				<p className="price">£{total}</p>
				{/* <p>{item.count}</p> */}
				<select value={currentCount} name="itemCount" onChange={selectHandle}>
					{amountOptions.map((num, index) => {
						return (
						<option key={index}>{num}</option>
						);
					})}
				</select>
				<button className="cart-item-close" onClick={deleteHandle}>
					<MdClose />
				</button>
			</div>
		</div>
	);
}
