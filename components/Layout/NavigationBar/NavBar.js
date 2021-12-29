import styles from '../../../styles/NavBar.module.scss';
import Logo from '../Logo';
import OpenMenuButton from './OpenMenuButton';
const NavBar = ({ setIsMenuOpen, isMenuOpen }) => {
	return (
		<nav className={styles.navbar}>
			<Logo />
			<div className={styles.navBarIcons}>
				<OpenMenuButton setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
			</div>
		</nav>
	);
};

export default NavBar;
