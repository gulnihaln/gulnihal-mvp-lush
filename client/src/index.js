import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
} from "@apollo/client";
import App from "./App";

const client = new ApolloClient({
	uri: "https://twstg2.eu.saleor.cloud/graphql/",
	cache: new InMemoryCache(),
}); 

client
	.query({
		query: gql`
			query GET_ALL {
				products(channel: "uk", first: 25) {
					edges {
						node {
							id
							name
							category {
								name
							}
							# description,
							rating
							media {
								url
							}
							pricing {
								priceRange {
									start {
										gross {
											currency
											amount
										}
									}
								}
							}
						}
					}
				}
			}
		`,
	})

ReactDOM.render(
	<BrowserRouter>
	 <ApolloProvider client={client}>
		<App />
	 </ApolloProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
