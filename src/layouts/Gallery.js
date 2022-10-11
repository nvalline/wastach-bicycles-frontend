import { useQuery } from 'urql';
import { PRODUCT_QUERY } from '../lib/query';

import { GalleryStyled } from '../../styles/layouts/GalleryStyle';
import Product from '../components/Product';

export default function Gallery() {
	// Fetch products from Strapi
	const [results] = useQuery({ query: PRODUCT_QUERY });
	const { data, error, fetching } = results;

	// Check for the data coming in
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Doh! {error.message}</p>;

	// Set products variable once data is fetched
	const products = data.products.data;

	return (
		<GalleryStyled>
			{products.map((product) => (
				<Product key={product.attributes.slug} product={product} />
			))}
		</GalleryStyled>
	);
}
