import styles from '../styles/ByDonatingYouAre.module.scss';
import { sectionText } from '../text/byDonatingYouAre';
export default () => {
	const { title, content } = sectionText;

	const renderText = (arr) => {
		return arr.map((obj) => {
			const { text, icon } = obj;
			return (
				<div key={text} className={styles.chart}>
					<i>{icon}</i>
					<p>{text}</p>
				</div>
			);
		});
	};

	return (
		<div className={styles.byDonating_container}>
			<h1>{title}</h1>
			<div className={styles.chart_container}>{renderText(content)}</div>
		</div>
	);
};
