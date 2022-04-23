import { FiMapPin } from "react-icons/fi";
import "./styles/ClickAndCollect.css";

export default function ClickAndCollect () {
    return (
			<>
				<ul className="click-collect-container">
					<li className="click-collect">
						<FiMapPin className="map-icon" />
						<h2>Click and collect</h2>
					</li>
					<li className="find-store-container">
						<input type="text" placeholder="Search by postcode" />
						<button className="find-store-button">Find</button>
					</li>
				</ul>
			</>
		);
}