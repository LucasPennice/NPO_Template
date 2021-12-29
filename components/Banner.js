import styles from '../styles/Banner.module.scss';
import ImageSlider from './ImageSlider';
const Banner = ({ imagesArray }) => {
	return (
		<div className={styles.hero_container}>
			<ImageSlider imagesArray={imagesArray} />
		</div>
	);
};

export default Banner;
