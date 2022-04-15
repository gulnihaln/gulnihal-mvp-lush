import React, { useState } from "react";
import { ImSearch } from "react-icons/im"
import { FiSmile, FiShoppingBag } from "react-icons/fi";
import { BiWorld } from "react-icons/bi"

export default function Navbar () {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
			<>
				<section className="navbar-container">
					<h1 className="logo">SPLUSH</h1>
					<div className="search">
						<input
							className={`${isSearchOpen ? "open" : ""}`}
							type="text"
							placeholder="Search..."
						/>
						<ImSearch className="navbar-icon" />
					</div>
					<article className="navbar-menu">
						<FiSmile className="navbar-icon" />
						<BiWorld className="navbar-icon" />
						<FiShoppingBag className="navbar-icon" />
					</article>
				</section>
			</>
		);
}