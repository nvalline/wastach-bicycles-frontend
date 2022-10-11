import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';

import formatMoney from '../src/lib/formatMoney';

import bicycle from '../public/bicycle.jpg';
import {
	AddressStyled,
	CardStyled,
	InfoWrapperStyled,
	OrderInfoStyled,
	WrapperStyled
} from '../styles/layouts/SuccessStyle';

const stripe = require('stripe')(
	`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
	const order = await stripe.checkout.sessions.retrieve(
		params.query.session_id,
		{
			expand: ['line_items']
		}
	);

	return { props: { order } };
}

export default function Success({ order }) {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Wasatch Bicycles | Order Success</title>
			</Head>
			<WrapperStyled>
				<CardStyled
					initial={{ opacity: 0, scale: 0.75 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.75 }}
				>
					<h1>Thank you for your order!</h1>
					<h2>A confirmation email has been sent to</h2>
					<h2>{order.customer_details.email}</h2>
					<InfoWrapperStyled>
						<AddressStyled>
							<h3>Address</h3>
							<p>Street: {order.customer_details.address.line1}</p>
							<p>Street 2: {order.customer_details.address.line2}</p>
							<p>City: {order.customer_details.address.city}</p>
							<p>State: {order.customer_details.address.state}</p>
							<p>Postal Code: {order.customer_details.address.postal_code}</p>
							<p>Country: {order.customer_details.address.postal_country}</p>
						</AddressStyled>
						<OrderInfoStyled>
							<h3>Products</h3>
							{order.line_items.data.map((item) => (
								<div key={item.id}>
									<p>Product: {item.description}</p>
									<p>Quantity: {item.quantity}</p>
									<p>Price: {formatMoney(item.price.unit_amount)}</p>
								</div>
							))}
						</OrderInfoStyled>
					</InfoWrapperStyled>
					<button onClick={() => router.push('/')}>Continue Shopping</button>
					<Image src={bicycle} alt='bicycle' />
				</CardStyled>
			</WrapperStyled>
		</>
	);
}
