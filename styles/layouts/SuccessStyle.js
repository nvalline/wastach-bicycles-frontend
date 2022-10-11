import styled from 'styled-components';

const { motion } = require('framer-motion');

export const WrapperStyled = styled.div`
	margin: 5rem 8rem;
`;

export const CardStyled = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: hsla(360, 100%, 100%, 1);
	border-radius: 2rem;
	padding: 3rem 3rem;

	h2 {
		margin: 1rem 0rem;
	}

	button {
		color: hsla(360, 100%, 100%, 1);
		background: var(--primary);
		border: none;
		font-size: 1.2rem;
		font-weight: 500;
		margin-bottom: 1rem;
		padding: 1rem 2rem;
		cursor: pointer;
	}
`;

export const AddressStyled = styled.div`
	font-size: 1rem;
	width: 100%;
`;

export const OrderInfoStyled = styled.div`
	font-size: 1rem;
	width: 100%;

	div {
		padding-bottom: 1rem;
	}
`;

export const InfoWrapperStyled = styled.div`
	display: flex;
	margin: 2rem 0rem;
`;
