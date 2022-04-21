CREATE TABLE product(
	id serial PRIMARY KEY,
	productName VARCHAR (255) UNIQUE NOT NULL,
	imgUrl VARCHAR (255) UNIQUE NOT NULL,
	category VARCHAR (255) NOT NULL,
    productType VARCHAR (255) NOT NULL,
    vegan BOOLEAN,
	phrase VARCHAR(255) NOT NULL,
	productDesc VARCHAR(5000)
);
CREATE TABLE stock(
	id serial PRIMARY KEY,
	productId INT NOT NULL REFERENCES product(id),
	size VARCHAR (255) NOT NULL,
    price DECIMAL NOT NULL,
	amount INT NOT NULL
);

INSERT INTO product(productName, imgUrl, category, productType, vegan, phrase) VALUES ('Unicorn Poop', 'bath1.jpeg', 'Bath Products', 'Bath Bomb', 'true', 'Invigorate your imagination');
INSERT INTO product(productName, imgUrl, category, productType, vegan, phrase) VALUES ('Black Rose', 'bath2.jpeg', 'Bath Products', 'Bath Bomb', 'true', 'Our darkest bath art yet...');
INSERT INTO product(productName, imgUrl, category, productType, vegan, phrase) VALUES ('Peachy', 'bath3.jpeg', 'Bath Products', 'Bubble Bar', 'true', 'A pinch of fruity, peachy joy');
INSERT INTO product(productName, imgUrl, category, productType, vegan, phrase) VALUES ('Frozen', 'bath4.jpeg', 'Bath Products', 'Bubble Bar', 'true', 'Sweet spearmint suds');
INSERT INTO product(productName, imgUrl, category, productType, vegan, phrase) VALUES ('Sleepy', 'bath5.jpeg', 'Bath Products', 'Bubble Bar', 'true', 'Soft, malted lavender');

INSERT INTO product(productName, imgUrl, category, productType, vegan, phrase) VALUES ('Dream Cream', 'body1.jpeg', 'Body Care', 'Body Lotion', 'true', 'Oat and lavender cult classic');
INSERT INTO product(productName, imgUrl, category, productType, vegan, phrase) VALUES ('Beauty Sleep', 'body2.jpeg', 'Body Care', 'Face And Body Mask', 'true', 'Sublime, hydrating and luxurious');
INSERT INTO product(productName, imgUrl, category, productType, vegan, phrase) VALUES ('Lime Bounty', 'body3.jpeg', 'Body Care', 'Body butter', 'true', 'Dreamy lime and coconut cream');

INSERT INTO product(productName, imgUrl, category, productType, vegan, phrase, productDesc) VALUES ('Grounded', 'makeup1.jpeg', 'Makeup', 'Eyeliner', 'true', 'Down to earth', 'Our eyeliners contain a soothing base of organic jojoba and Fair Trade organic aloe vera gel, to ensure your chosen shade will glide on seamlessly and be extra gentle on the delicate eye area. Whether you choose to use as a liner or as a wash of colour, this lightweight, super pigmented eye colour will sit comfortably throughout wear.');
INSERT INTO product(productName, imgUrl, category, productType, vegan, phrase, productDesc) VALUES ('Pipit Glow Stick', 'makeup2.jpeg', 'Makeup', 'Highlighter', 'true', 'Rose gold glow!', 'Organic, extra virgin coconut oil sourced from Nias, Indonesia, is light on the skin, but not in benefits. 10% of the supplier’s profits from this skin-softening oil fund social amenities on the island. But that’s not all, luxurious Moroccan argan oil, a renowned beauty oil used to strengthen, condition and pamper complexions, is expertly harvested by a women’s community enterprise in Morocco.');
INSERT INTO product(productName, imgUrl, category, productType, vegan, phrase, productDesc) VALUES ('Berlin', 'makeup3.jpeg', 'Makeup', 'Lipstick Refill', 'true', 'Breathtaking Raspberry red', 'Cruelty-free kisses starts with you! Our 100% vegan lipstick contains a host of non animal tested, skin loving ingredients such as creamy, hydrating Castor oil which is expertly combined with long-wearing, cruelty-free pigments for stand-out lip colour.');
INSERT INTO product(productName, imgUrl, category, productType, vegan, phrase, productDesc) VALUES ('Refillable Lipstick Case', 'makeup4.jpeg', 'Makeup', 'Lipstick Case', 'true', 'On everyone’s lips', 'This plastic-free vintage-style, refillable lipstick case is made from partially recycled aluminium and brass and is the perfect fit for your Naked Lipstick Refills. Made in France by cosmetic packaging specialists Reboul, this eye-catching design makes the perfect eco-friendly addition to any makeup bag.');


INSERT INTO stock(productId, size, price, amount) VALUES (1, '200g', 6.50, 99);
INSERT INTO stock(productId, size, price, amount) VALUES (2, '90g', 3.50, 65);
INSERT INTO stock(productId, size, price, amount) VALUES (2, '200g', 6.50, 56);
INSERT INTO stock(productId, size, price, amount) VALUES (3, '200g', 5.90, 119);
INSERT INTO stock(productId, size, price, amount) VALUES (4, '90g', 3.00, 63);
INSERT INTO stock(productId, size, price, amount) VALUES (4, '200g', 6.29, 99);
INSERT INTO stock(productId, size, price, amount) VALUES (5, '200g', 6.50, 4);

INSERT INTO stock(productId, size, price, amount) VALUES (6, '240g', 16.50, 77);
INSERT INTO stock(productId, size, price, amount) VALUES (6, '440g', 30.00, 7);
INSERT INTO stock(productId, size, price, amount) VALUES (7, '240g', 13.50, 56);
INSERT INTO stock(productId, size, price, amount) VALUES (7, '440g', 25.50, 2);
INSERT INTO stock(productId, size, price, amount) VALUES (8, '240g', 10.00, 87);
INSERT INTO stock(productId, size, price, amount) VALUES (8, '440g', 18.50, 77);

INSERT INTO stock(productId, size, price, amount) VALUES (9, 'Each', 15.00, 3);
INSERT INTO stock(productId, size, price, amount) VALUES (10, 'Each', 12.00, 43);
INSERT INTO stock(productId, size, price, amount) VALUES (11, 'Each', 10.00, 1);
INSERT INTO stock(productId, size, price, amount) VALUES (12, 'Each', 8.00, 83);













