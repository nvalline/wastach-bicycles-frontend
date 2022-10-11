import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { useShopContext } from '../lib/context';

const { AnimatePresence, motion } = require('framer-motion');

import Cart from '../components/Cart';
import User from '../components/User';

import { NavItemsStyled, NavStyled } from '../../styles/layouts/NavStyle';

export default function Nav() {
	const { showCart, setShowCart, totalQuantity } = useShopContext();

	return (
		<NavStyled>
			<Link href={'/'}>Wasatch Bicycles</Link>
			<NavItemsStyled>
				<User />
				<div onClick={() => setShowCart(true)}>
					{totalQuantity > 0 && (
						<motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
							{totalQuantity}
						</motion.span>
					)}
					<FiShoppingBag />
					<h3>Cart</h3>
				</div>
			</NavItemsStyled>
			<AnimatePresence>{showCart && <Cart />}</AnimatePresence>
		</NavStyled>
	);
}
