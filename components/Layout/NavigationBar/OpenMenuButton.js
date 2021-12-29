import styles from '../../../styles/NavBar.module.scss';

const OpenMenuButton = ({ isMenuOpen, setIsMenuOpen }) => {
	return (
		<button
			id="openMenu"
			className={
				isMenuOpen === false ? styles.openMenuBtn : styles.closeMenuBtn
			}
			onClick={() => setIsMenuOpen(!isMenuOpen)}
		>
			<span id="btnSpan"></span>
			<span id="btnSpan"></span>
			<span id="btnSpan"></span>
		</button>
	);
};
export default OpenMenuButton;
