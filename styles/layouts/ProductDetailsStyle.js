import styled from 'styled-components';

export const ProductDetailsStyled = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 5rem;

	img {
		width: 40%;
	}
`;

export const ProductInfo = styled.div`
	width: 40%;

	button {
		font-size: 1rem;
		font-weight: medium;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}
`;

export const Quantity = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem 0rem;

	button {
		padding: 0rem 0.5rem;
		background: transparent;
		border: none;
		display: flex;
		font-size: 1.5rem;
	}

	p {
		width: 1rem;
		text-align: center;
	}

	span {
		color: var(--secondary-text);
	}

	svg {
		color: hsla(0, 0%, 29%, 1);
	}
`;

export const Buy = styled.button`
	width: 100%;
	background: var(--primary);
	color: hsla(0, 100%, 100%, 1);
	font-weight: 500;
`;
