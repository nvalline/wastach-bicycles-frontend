import { Provider, createClient } from 'urql';
import { StateContext } from '../src/lib/context';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Toaster } from 'react-hot-toast';

import Nav from '../src/layouts/Nav';

import '../styles/globals.css';

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<StateContext>
				<Provider value={client}>
					<Toaster />
					<Nav />
					<Component {...pageProps} />
				</Provider>
			</StateContext>
		</UserProvider>
	);
}

export default MyApp;
