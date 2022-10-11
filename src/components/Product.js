import Link from 'next/link';
import { ProductStyled } from '../../styles/components/ProductStyle';

export default function Product({ product }) {
	// Extract data from product
	const { image, price, title, slug } = product.attributes;

	return (
		<ProductStyled>
			<div className='image-container'>
				<Link href={`product/${slug}`}>
					<img src={image.data.attributes.formats.small.url} alt={title} />
				</Link>
			</div>
			<h2>{title}</h2>
			<h3>{price}</h3>
		</ProductStyled>
	);
}
