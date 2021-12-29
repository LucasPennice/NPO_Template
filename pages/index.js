import Head from 'next/head';
import Banner from '../components/Banner';
import ByDonatingYouAre from '../components/ByDonatingYouAre';
import OurColaborators from '../components/OurColaborators';
import WeAreLocatedIn from '../components/WeAreLocatedIn';
import companyName from '../text/companyName.json';
import styles from '../styles/MainPage.module.scss';
import TextBlock from '../components/TextBlock';
import aboutUsText from '../text/aboutUsText.json';
import heroImages from '../text/heroImages.json';
import ourMissionText from '../text/ourMissionText.json';
export default function Home() {
	const { imagesArray } = heroImages;
	const { blue } = imagesArray[0];
	const { green } = imagesArray[1];
	const { purple } = imagesArray[2];
	const { orange } = imagesArray[3];
	const { yellow } = imagesArray[4];
	return (
		<>
			<Head>
				<title>{companyName.companyName}</title>
			</Head>

			<div className={styles.main_container}>
				<TextBlock textJson={aboutUsText} />
				<Banner imagesArray={blue} />
				<TextBlock textJson={ourMissionText} />
				<ByDonatingYouAre />
				<OurColaborators />
				<WeAreLocatedIn />
			</div>
		</>
	);
}
