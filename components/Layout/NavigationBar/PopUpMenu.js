import styles from '../../../styles/PopUpMenu.module.scss';
import menuJson from '../../../text/menuJson.json';
import ExtendedMenu from './ExtendedMenu';
export default ({ isMenuOpen }) => {
	const displayMenu = (state) => {
		return state === false ? styles.container_h : styles.container;
	};

	const renderMenuFromJson = (menuJson) => {
		return menuJson.map((menuData) => {
			return <ExtendedMenu menuData={menuData} key={menuData.title} />;
		});
	};
	return (
		<>
			<div className={displayMenu(isMenuOpen)}>
				{renderMenuFromJson(menuJson)}
			</div>
		</>
	);
};
