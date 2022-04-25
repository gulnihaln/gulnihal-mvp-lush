import AllProducts from "../components/Main/AllProducts";
import "../components/Main/styles/ProductCard.css";
import { gql, useQuery } from "@apollo/client";
import { query } from "../utils/getQuery";

export default function Home() {

	const GET_ALL = gql `${query}`;
	const { loading, error, data } = useQuery(GET_ALL);
	if(error) {
	return <h1> error</h1>;
	}

	if(loading) {
	return <h1> loading</h1>;
	}
	return (
		<>
			<AllProducts data={data.products.edges} />
		</>
	);
}
