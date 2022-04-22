import ProductCard from "./ProductCard";

export default function AllProducts ({ data }) {
    return (
			<>
				<div className="products-container">
					{data.map(({ node }) => {
						return (
							<ProductCard
								key={node.id}
								node={node}
							/>
						);
					})}
				</div>
			</>
		);
}