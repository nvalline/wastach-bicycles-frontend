import styled from 'styled-components';

export const OrdersStyled = styled.div`
	background: hsla(360, 100%, 100%, 1);
	margin: 2rem 0rem;
	padding: 3rem;
	display: flex;
	justify-content: space-between;

	h1 {
		font-size: 0.8rem;
	}

	h2 {
		font-size: 0.8rem;
	}
`;

export const ButtonStyled = styled.button`
	color: hsla(360, 100%, 100%, 1);
	background: var(--primary);
	border: none;
	font-size: 1.2rem;
	font-weight: 500;
	margin-bottom: 1rem;
	padding: 1rem 2rem;
	cursor: pointer;
`;
