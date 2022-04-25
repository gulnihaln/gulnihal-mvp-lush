import { Route, Routes } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import Cart from "../src/pages/Cart";
import Home from "./pages/Home";
import Header from "../src/components/Header/Header";
import CategoryPage from "./pages/CategoryPage";
import Footer from "../src/components/Footer/Footer";
import "./App.css";

const App = () => (
	<div>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product/:productid" element={<SingleProduct />} />
			<Route path="/:category" element={<CategoryPage />} />
			<Route path="/cart" element={<Cart />} />
		</Routes>
		<Footer />
	</div>
);

export default App;
