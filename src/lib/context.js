import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const StateContext = ({ children }) => {
	// State declarations
	const [cartItems, setCartItems] = useState([]);
	const [showCart, setShowCart] = useState(false);
	const [qty, setQty] = useState(1);
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	// Increase product quantity
	const increaseQty = () => {
		setQty((prevQty) => prevQty + 1);
	};

	// Decrease product quantity
	const decreaseQty = () => {
		setQty((prevQty) => {
			if (prevQty - 1 < 1) return 1;
			return prevQty - 1;
		});
	};

	// Add product to cart
	const onAdd = (product, quantity) => {
		// Increase total price
		setTotalPrice((prevPrice) => prevPrice + product.price * quantity);

		// Increase total product quantity
		setTotalQuantity((prevTotal) => prevTotal + quantity);

		// Check if product already exists in cart
		const exist = cartItems.find((item) => item.slug === product.slug);

		if (exist) {
			setCartItems(
				cartItems.map((item) =>
					item.slug === product.slug
						? { ...exist, quantity: exist.quantity + quantity }
						: item
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, quantity: quantity }]);
		}
	};

	// Remove product from cart
	const onRemove = (product) => {
		// Decrease total price
		setTotalPrice((prevPrice) => prevPrice - product.price);

		// Decrease total product quantity
		setTotalQuantity((prevTotal) => prevTotal - 1);

		// Check if product already exists in cart
		const exist = cartItems.find((item) => item.slug === product.slug);

		if (exist.quantity === 1) {
			setCartItems(cartItems.filter((item) => item.slug !== product.slug));
		} else {
			setCartItems(
				cartItems.map((item) =>
					item.slug === product.slug
						? { ...exist, quantity: exist.quantity - 1 }
						: item
				)
			);
		}
	};

	return (
		<ShopContext.Provider
			value={{
				cartItems,
				showCart,
				setShowCart,
				qty,
				setQty,
				decreaseQty,
				increaseQty,
				onAdd,
				onRemove,
				totalQuantity,
				totalPrice
			}}
		>
			{children}
		</ShopContext.Provider>
	);
};

export const useShopContext = () => useContext(ShopContext);
