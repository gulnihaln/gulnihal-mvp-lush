import { ImTruck } from "react-icons/im";
import { GiShoppingBag } from "react-icons/gi";

export default function TopNav() {
	return (
		<>
			<div className="topnav">
				<a href="#">
					<ImTruck />
					Make shopping easy with our Delivery Pass
				</a>
				<div className="vl"></div>
				<a href="#"><GiShoppingBag />Pay in 4 with Clearpay</a>
			</div>
		</>
	);
}
