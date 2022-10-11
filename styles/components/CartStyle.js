import styled from 'styled-components';

const { motion } = require('framer-motion');

export const CartWrapperStyled = styled(motion.div)`
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	background: hsla(0, 0%, 0%, 0.4);
	z-index: 100;
	/* display: none; */
`;

export const CartStyled = styled(motion.div)`
	position: relative;
	width: 40%;
	padding: 2rem 5rem;
	background: hsla(0, 0%, 95%, 1);
	overflow-y: scroll;
`;

export const CardStyled = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 1rem;
	overflow: hidden;
	background: hsla(360, 100%, 100%, 1);
	padding: 2rem;
	margin: 2rem 0rem;

	img {
		width: 6rem;
	}
`;

export const CardInfoStyled = styled(motion.div)`
	width: 50%;

	div {
		display: flex;
		justify-content: space-between;
	}
`;

export const EmptyCartStyled = styled(motion.div)`
	position: absolute;
	top: 0;
	transform: translate(-50%, 0%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 75%;

	svg {
		font-size: 5rem;
		color: var(--secondary);
	}

	h1 {
		font-size: 1.5rem;
		padding: 2rem 0rem;
	}
`;

export const Checkout = styled(motion.div)`
	button {
		background: var(--primary);
		padding: 1rem 2rem;
		width: 100%;
		border: none;
		color: hsla(100, 100%, 100%, 1);
		margin-top: 2rem;
		cursor: pointer;
	}
`;

export const Cards = styled(motion.div)``;
