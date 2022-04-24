import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { query } from "../utils/getQuery";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/Main/ProductCard";
import "../components/Main/styles/ProductCard.css";


export default function CategoryPage() {
    const location = useLocation();
    const GET_ALL = gql `${query}`;
    const { loading, error, data } = useQuery(GET_ALL);
    if(error) {
    return <h1> error</h1>;
    }

    if(loading) {
    return <h1> loading</h1>;
    }
    
    const path = location.pathname.split("/")[1].split("%20").join(" ");

    return (
        <div className="products-container">
            {data.products.edges.map(({ node }) => {
                if (node.category.name === path){
                return (
                    <ProductCard
                        key={node.id}
                        node={node}
                    />
                );
                }
            })}
        </div>
    )
}
