import styled from 'styled-components';

export const NavStyled = styled.nav`
	min-height: 15vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1rem;

	a {
		font-size: 1.2rem;
	}
`;

export const NavItemsStyled = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	div {
		position: relative;
		margin-left: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
	}

	h3 {
		padding: 0.25rem;
		font-size: 1rem;
	}

	svg {
		font-size: 1.5rem;
	}

	span {
		background: hsla(0, 100%, 57%, 1);
		color: hsla(100, 100%, 100%, 1);
		height: 1.3rem;
		width: 1.3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		font-size: 0.75rem;
		position: absolute;
		right: -10%;
		top: -20%;
		pointer-events: none;
	}
`;
