import styles from '../../styles/Layout.module.scss';
import NavBar from './NavigationBar/NavBar';
import Footer from './Footer';
export default ({ children, isMenuOpen, setIsMenuOpen }) => {
	const closeMenu = (e) => {
		if (e.target.id !== 'menuBtn' && e.target.id !== 'btnSpan')
			setIsMenuOpen(false);
		if (e.target.id === 'openMenu') setIsMenuOpen(!isMenuOpen);
	};
	return (
		<div className={styles.body} onClick={(e) => closeMenu(e)}>
			<NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<main>{children}</main>
			<Footer />
		</div>
	);
};
