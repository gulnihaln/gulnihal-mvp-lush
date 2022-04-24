import { ImTruck } from "react-icons/im";
import { GiShoppingBag } from "react-icons/gi";
import "../Header/Header.css";
export default function TopNav() {
	return (
		<>
			<div className="topnav">
				<ImTruck className="topnav-icon" />
				<a href="#">Make shopping easy with our Delivery Pass</a>
				<div className="vl"></div>
				<GiShoppingBag className="topnav-icon" />
				<p> Pay in 4 with Clearpay</p>
			</div>
		</>
	);
}
