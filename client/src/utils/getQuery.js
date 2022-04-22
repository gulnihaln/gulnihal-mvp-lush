
const query = `query GET_ALL {
			products(channel: "uk", first: 56) {
				edges {
					node {
						id
						name
						category {
							name
							}
						rating
						isAvailable
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
						productType {
							name
							}
						  weight {
							unit,
							value,
							}
					}
				}
			}
		}`;

export { query };