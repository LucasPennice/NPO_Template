import styles from '../styles/MainPage.module.scss';
const TextBlock = ({ textJson }) => {
	const { title, content, image, isBgGray } = textJson;

	const renderText = (arr) => {
		return arr.map((par) => {
			return (
				<p className={styles.aboutUs_p} key={par}>
					{par}
				</p>
			);
		});
	};

	const isBackgroundGray = () => {
		return isBgGray === true
			? `${styles.aboutUs_container} lightGrayBg`
			: styles.aboutUs_container;
	};

	return (
		<div className={isBackgroundGray()}>
			<h1 className={styles.aboutUs_h1}>{title}</h1>
			<div className={styles.content_container}>
				<img
					src={image}
					className={styles.about_image}
					alt="A family playing together"
				/>
				<div>{renderText(content)}</div>
			</div>
		</div>
	);
};
export default TextBlock;
