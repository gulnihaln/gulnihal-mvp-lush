const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const products = [
	{ id: 1, name: "Cream", phrase: "soft as cotton" },
	{ id: 2, name: "Rainbow", phrase: "colorful and joyful" }
];

const productType = new GraphQLObjectType({
	name: "Product",
	fields: {
		id: { type: GraphQLInt },
		productName: { type: GraphQLString },
		phrase: { type: GraphQLString }
	},
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        product: {
            type: productType,
            args: {id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return _.find(products, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});