import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useState } from 'react';
import styles from '../styles/Banner.module.scss';

const ImageSlider = ({ imagesArray }) => {
	const [currentImg, setCurrentImg] = useState(0);

	const prevImg = () => {
		if (currentImg === 0) return setCurrentImg(imagesArray.length - 1);
		setCurrentImg(currentImg - 1);
	};

	const nextImg = () => {
		if (currentImg === imagesArray.length - 1) return setCurrentImg(0);
		setCurrentImg(currentImg + 1);
	};

	const highlightCurrentButton = (btn) => {
		return btn === imagesArray[currentImg]
			? `${styles.circle} ${styles.active}`
			: `${styles.circle} ${styles.inactive}`;
	};

	const renderButtons = () => {
		return imagesArray.map((btn) => {
			const currentClass = highlightCurrentButton(btn);
			return <div className={currentClass} key={btn}></div>;
		});
	};

	const renderImages = () => {
		return imagesArray.map((image) => {
			return (
				<img
					key={image}
					src={image}
					alt=""
					className={
						image === imagesArray[currentImg]
							? `${styles.slider_img} ${styles.show}`
							: `${styles.slider_img}`
					}
				/>
			);
		});
	};

	return (
		<div className={`${styles.image_slider_container}`}>
			<MdNavigateBefore className={`${styles.before_btn}`} onClick={prevImg} />
			<div className={`${styles.slider_container}`}>{renderImages()}</div>
			<MdNavigateNext className={`${styles.after_btn}`} onClick={nextImg} />

			<div className={`${styles.circles_container}`}>{renderButtons()}</div>
		</div>
	);
};
export default ImageSlider;
