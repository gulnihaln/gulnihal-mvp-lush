import { Route, Routes } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import Cart from "../src/pages/Cart";
import Home from "../src/components/Main/Home";
import Header from "../src/components/Header/Header";
import CategoryPage from "./pages/CategoryPage";
import Footer from "../src/components/Footer/Footer";

const App = () => (
	<div>
		<Header />
		<Routes>
			<Route path="/all" element={<Home />} />
			<Route path="/product/:productid" element={<SingleProduct />} />
			<Route path="/all/:category" element={<CategoryPage />} />
			<Route path="/cart" element={<Cart />} />
		</Routes>
		<Footer />
	</div>
);

export default App;
