import React, { useState } from "react";
import { ImSearch } from "react-icons/im"
import { FiSmile, FiShoppingBag } from "react-icons/fi";
import { BiWorld } from "react-icons/bi"
import { Link } from "react-router-dom";
import "../Header/Header.css";
import {
	MdOutlineMenu,
	MdClose,
} from "react-icons/md";

export default function Navbar () {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
			<>
				<section className="navbar-container">
					<div className="logo">
						<Link to="/">
							<h1>SPLUSH</h1>
						</Link>
					</div>
					<div className="logo-hamburger-container">
						<button
							aria-label="hamburger menu"
							className="hamburger"
							onClick={() => setIsMenuOpen((prev) => !prev)}
						>
							{!isMenuOpen ? <MdOutlineMenu /> : <MdClose />}
						</button>
						<nav className={`${isMenuOpen ? "open" : ""}`}>
							<ul onClick={() => setIsMenuOpen(false)}>
								<li>Account</li>
								<li>Region</li>
								<li>
									<Link to="/cart">
										<FiShoppingBag className="navbar-icon" />
									</Link>
								</li>
								<li>
									<input type="text" placeholder="Search..." />
									<ImSearch className="navbar-icon" />
								</li>
							</ul>
						</nav>
					</div>
					<article className="navbar-menu">
						<div className="search">
							<input type="text" placeholder="Search..." />
							<ImSearch className="navbar-icon" />
						</div>
						<FiSmile className="navbar-icon" />
						<BiWorld className="navbar-icon" />
						<Link to="/cart">
							<FiShoppingBag className="navbar-icon" />
						</Link>
					</article>
				</section>
			</>
		);
}