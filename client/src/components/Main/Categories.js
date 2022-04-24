import { useLocation } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { query } from "../../utils/getQuery";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles/Categories.css";
import CategoriesDropdown from "./CategoriesDropdownMenu";

export default function Categories () {
	const location = useLocation();
	const GET_ALL = gql`
		${query}
	`;
	const { loading, error, data } = useQuery(GET_ALL);
	if (error) {
		return <h1> error</h1>;
	}

	if (loading) {
		return <h1> loading categories... </h1>;
	}

	const allCategories = data.products.edges.map(({ node }) => node.category.name)
	let singleCategory = [...new Set(allCategories)];


	const path = location.pathname
	
	return (
		<> {path !== "/cart" &&
			<section className="category-container">
				<div className="category-buttons">
					<Link to="/">
						<button>All</button>
					</Link>
					{singleCategory.map((category) => {
						return (
							<Link to={`/${category}`} key={category}>
								<button key={category}>{category}</button>
							</Link>
						);
					})}
			
				</div>
				<CategoriesDropdown categories={singleCategory} />
				<div className="sort-filter">
					<button>
						SORT BY <FiChevronDown />
					</button>
					<button>FILTER</button>
				</div>
			</section>
	}
		</>
	);
}
