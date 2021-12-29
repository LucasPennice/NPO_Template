import styles from '../../styles/Footer.module.scss';
import menuJson from '../../text/menuJson.json';
import Link from 'next/link';
const Footer = () => {
	const renderFooterLinks = (arr) => {
		return arr.map((obj) => {
			const { title, anchorLink } = obj;
			return (
				<a href={anchorLink} key={anchorLink} className={styles.footer_a}>
					{title}
				</a>
			);
		});
	};
	const renderFooter = (arr) => {
		return arr.map((obj) => {
			const { title, subpages, isDonationAnchor } = obj;
			if (isDonationAnchor === true) return <></>;
			return (
				<div key={title} className={styles.footerSection_container}>
					<h1 className={styles.footer_h1}>{title}</h1>
					{renderFooterLinks(subpages)}
				</div>
			);
		});
	};
	return (
		<>
			<footer className={styles.footer}>{renderFooter(menuJson)}</footer>
			<Link href="creditos">
				<a className={styles.creditos_anchor}>Créditos y agradecimientos</a>
			</Link>
		</>
	);
};

export default Footer;
