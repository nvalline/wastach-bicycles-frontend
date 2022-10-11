import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../src/lib/query';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useShopContext } from '../../src/lib/context';
import toast from 'react-hot-toast';

import QuantityButton from '../../src/util/QuantityButton';

import {
	Buy,
	ProductDetailsStyled,
	ProductInfo,
	Quantity
} from '../../styles/layouts/ProductDetailsStyle';

export default function ProductDetails() {
	// Use state context
	const { qty, setQty, decreaseQty, increaseQty, onAdd } = useShopContext();

	// Reset product qty on page load
	useEffect(() => {
		setQty(1);
	}, []);

	// Fetch slug
	const { query } = useRouter();

	// Fetch Graphql data
	const [results] = useQuery({
		query: GET_PRODUCT_QUERY,
		variables: { slug: query.slug }
	});

	const { data, fetching, error } = results;

	// Check for the data coming in
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Doh! {error.message}</p>;

	// Extract product data
	const { description, image, title } = data.products.data[0].attributes;

	// Create toast notification
	const notify = () => {
		toast.success(`${title} has been added to the cart.`, {
			duration: 1500,
			style: {
				textAlign: 'center'
			}
		});
	};

	return (
		<>
			<Head>
				<title>Wasatch Bicycles | {title}</title>
			</Head>
			<ProductDetailsStyled>
				<img src={image.data.attributes.formats.medium.url} alt={title} />
				<ProductInfo>
					<h3>{title}</h3>
					<p>{description}</p>
					<Quantity>
						<span>Quantity</span>
						<QuantityButton icon='minus' onClick={decreaseQty} />
						<p>{qty}</p>
						<QuantityButton icon='plus' onClick={increaseQty} />
					</Quantity>
					<Buy
						onClick={() => {
							onAdd(data.products.data[0].attributes, qty);
							notify();
						}}
					>
						Add to Cart
					</Buy>
				</ProductInfo>
			</ProductDetailsStyled>
		</>
	);
}
