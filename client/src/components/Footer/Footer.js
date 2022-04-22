import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
    return (
			<>
				<footer>
					<div className="footer-top">
						<section className="newsletter">
							<h2>Join our Newsletter</h2>
							<p>
								Stay up to date with product launches, events and more. We won't
								share your information with any third parties and you can
								unsubscribe at any time. For more information see our Privacy
								Notice and Terms and Conditions.
							</p>
							<form className="form">
								<div>
									<label htmlFor="email"></label>
									<input type="email" id="email" placeholder="Email"required />
								</div>
								<button type="submit">
									<FiArrowLeft />
								</button>
							</form>
						</section>
						<div className="footer-top-second">
							<ul className="footer-links-container">
								<h2>Customer Service</h2>
								<li className="footer-item">
									<Link to={"/"}>Contact us</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={"/"}>Delivery Information</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={"#"}>Returns & Refunds</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>Privacy Policy</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>Cookie Policy</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>FAQs</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>Terms & Conditions</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>Shop Finder</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>Brexit FAQs</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>Cookie Preferences</Link>{" "}
								</li>
							</ul>
							<ul className="footer-company-container">
								<h2>We are Splush</h2>
								<li className="footer-item">
									<Link to={""}>Who we are</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>What we stand for</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>We are Digital</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>Our impact</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>Our charitable giving</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>FAQs</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>Terms & Conditions</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>Shop Finder</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>Brexit FAQs</Link>{" "}
								</li>
								<li className="footer-item">
									<Link to={""}>Cookie Preferences</Link>{" "}
								</li>
							</ul>
						</div>
					</div>
					<section>
						<section className="social-icons">
							<a
								aria-label="Instagram"
								href="https://www.instagram.com/?hl=en"
								target={"_blank"}
							>
								<BsInstagram />
							</a>
							<a
								aria-label="Facebook"
								href="https://en-gb.facebook.com/"
								target={"_blank"}
							>
								<BsFacebook />
							</a>
							<a
								aria-label="Twitter"
								href="https://twitter.com/"
								target={"_blank"}
							>
								<BsTwitter />
							</a>
						</section>
						<p>© Copyright 2022 SPLUSH</p>
						<a className="footer-bottom"
							href="https://github.com/gulnihaln/gulnihal-mvp-lush"
							target={"_blank"}
						>
							Codebase
						</a>
					</section>
				</footer>
			</>
		);
}
