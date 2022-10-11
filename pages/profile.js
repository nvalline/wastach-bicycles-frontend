import Head from 'next/head';
import { useRouter } from 'next/router';
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';

import formatMoney from '../src/lib/formatMoney';

import { ButtonStyled, OrdersStyled } from '../styles/layouts/ProfileStyle';

const stripe = require('stripe')(
	`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export const getServerSideProps = withPageAuthRequired({
	async getServerSideProps(ctx) {
		const session = getSession(ctx.req, ctx.res);
		const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
		const paymentIntents = await stripe.paymentIntents.list({
			customer: stripeId
		});
		return { props: { orders: paymentIntents.data } };
	}
});

export default function profile({ orders, user }) {
	const router = useRouter();

	return (
		user && (
			<>
				<Head>
					<title>Wasatch Bicycles | Profile</title>
				</Head>
				<div>
					<h2>{user.name}</h2>
					<p>{user.email}</p>
					<div>
						{orders.map((order) => (
							<OrdersStyled key={order.id}>
								<h1>Order Number: {order.id}</h1>
								<h2>Order Amount: {formatMoney(order.amount)}</h2>
								<h2>Receipt Email: {user.email}</h2>
							</OrdersStyled>
						))}
					</div>
					<ButtonStyled onClick={() => router.push('/api/auth/logout')}>
						Logout
					</ButtonStyled>
				</div>
			</>
		)
	);
}
