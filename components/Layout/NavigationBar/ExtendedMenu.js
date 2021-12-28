import Link from 'next/link';
import styles from '../../../styles/PopUpMenu.module.scss';

export default ({ menuData }) => {
	const { title, subpages, titleLink, isDonationAnchor } = menuData;

	const renderLinks = (subpages) => {
		return subpages.map((anchor) => {
			return (
				<Link href={anchor.anchorLink} key={anchor.anchorLink}>
					{anchor.title}
				</Link>
			);
		});
	};

	const renderButton = () => {
		return isDonationAnchor === true ? (
			<a className={styles.donate_btn}>Donar</a>
		) : (
			<a className={styles.mainMenu_anchors} id="menuBtn">
				{title}
			</a>
		);
	};

	const checkAndRenderSubpages = () => {
		return subpages ? (
			<div className={styles.extended_menu}>{renderLinks(subpages)}</div>
		) : (
			<></>
		);
	};

	return (
		<div className={styles.extended_menu_container}>
			<Link href={titleLink === undefined ? '/' : titleLink}>
				{renderButton()}
			</Link>
			{checkAndRenderSubpages()}
		</div>
	);
};
