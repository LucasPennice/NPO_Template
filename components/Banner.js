import styles from '../styles/Banner.module.scss';
import ImageSlider from './ImageSlider';
export default ({ imagesArray }) => {
	return (
		<div className={styles.hero_container}>
			<ImageSlider imagesArray={imagesArray} />
		</div>
	);
};
