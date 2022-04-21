import { Router } from "express";
import pool from "./db";
// import db from "./db.js";
const router = Router();

router.get("/all", (_, res) => {
	const allProducts =
		"SELECT product.id as productId, productName, imgUrl, category, productType, vegan, phrase, productDesc, size, price, amount from product INNER JOIN stock AS s ON s.productId = product.id;";
	pool.query(allProducts, [], (error, result) => {
		if (error) {
			return res.status(500).send({ msg: "ERROR!!!" });
		}
		res.send(result.rows);
	});
});

router.get("/product/:productId", (req, res) => {
	const { productId } = req.params;
	console.log(productId, "WWWWW");
	const singleProduct =
		"SELECT product.id as productId, productName, imgUrl, category, productType, vegan, phrase, productDesc, size, price, amount from product INNER JOIN stock AS s ON s.productId = product.id WHERE productId=$1;";
	pool.query(singleProduct, [productId], (error, result) => {
		if (error) {
			console.log(error, "errr")
			return res.status(500).send({ msg: "ERROR!!!" });
		}
		res.send(result.rows[0]);
	});
});

export default router;
