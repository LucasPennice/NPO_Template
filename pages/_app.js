import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import PopUpMenu from '../components/Layout/NavigationBar/PopUpMenu';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<Layout setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}>
			<PopUpMenu isMenuOpen={isMenuOpen} />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
