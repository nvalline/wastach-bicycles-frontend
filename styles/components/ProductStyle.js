import styled from 'styled-components';

export const ProductStyled = styled.div`
	background-color: hsla(360, 100%, 100%, 1);
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 1.5rem;

	h2 {
		padding: 0.5rem 0rem;
	}

	.image-container {
		height: 100%;
		display: flex;
		align-items: center;
	}

	img {
		width: 100%;
		cursor: pointer;
	}
`;
