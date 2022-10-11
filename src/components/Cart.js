import { useShopContext } from '../lib/context';
import { FaShoppingCart } from 'react-icons/fa';
import getStripe from '../lib/getStripe';

import QuantityButton from '../util/QuantityButton';

import {
	CartWrapperStyled,
	CartStyled,
	CardStyled,
	CardInfoStyled,
	EmptyCartStyled,
	Checkout,
	Cards
} from '../../styles/components/CartStyle';
import { Quantity } from '../../styles/layouts/ProductDetailsStyle';

// Animation variants
const card = {
	hidden: { opacity: 0, scale: 0.8 },
	show: { opacity: 1, scale: 1 }
};

const cards = {
	hidden: { opacity: 1 },
	show: { opacity: 1, transition: { delayChildren: 0.4, staggerChildren: 0.1 } }
};

export default function Cart() {
	const { cartItems, onAdd, onRemove, setShowCart, totalPrice } =
		useShopContext();

	// Payment
	const handleCheckout = async () => {
		const stripe = await getStripe();
		const response = await fetch('/api/stripe', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(cartItems)
		});
		const data = await response.json();
		await stripe.redirectToCheckout({ sessionId: data.id });
	};

	return (
		<CartWrapperStyled
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={() => setShowCart(false)}
		>
			<CartStyled
				initial={{ x: '50%' }}
				animate={{ x: '0%' }}
				exit={{ x: '50%' }}
				transition={{ type: 'tween' }}
				onClick={(e) => e.stopPropagation()}
			>
				{cartItems.length < 1 && (
					<EmptyCartStyled
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2 }}
					>
						<FaShoppingCart />
						<h1>Your Cart Is Empty</h1>
					</EmptyCartStyled>
				)}
				<Cards layout variants={cards} initial='hidden' animate='show'>
					{cartItems.length >= 1 &&
						cartItems.map((item) => {
							return (
								<CardStyled layout variants={card} key={item.slug}>
									<img
										src={item.image.data.attributes.formats.thumbnail.url}
										alt={item.title}
									/>
									<CardInfoStyled>
										<h3>{item.title}</h3>
										<h3>${item.price}</h3>
										<Quantity>
											<span>Quantity</span>

											<QuantityButton
												icon='minus'
												onClick={() => onRemove(item)}
											/>
											<p>{item.quantity}</p>
											<QuantityButton
												icon='plus'
												onClick={() => onAdd(item, 1)}
											/>
										</Quantity>
									</CardInfoStyled>
								</CardStyled>
							);
						})}
				</Cards>
				{cartItems.length >= 1 && (
					<Checkout layout>
						<h3>Subtotal: ${totalPrice.toFixed(2)}</h3>
						<button onClick={handleCheckout}>Purchase</button>
					</Checkout>
				)}
			</CartStyled>
		</CartWrapperStyled>
	);
}
