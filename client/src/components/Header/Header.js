import TopNav from "./TopNav";
import Navbar from "./Navbar";
import Categories from "../Main/Categories";
import "./Header.css";

export default function Header() {
	return (
		<>
			<div className="header">
				<TopNav />
				<Navbar />
				<Categories />
			</div>
		</>
	);
}
