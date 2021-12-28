import styles from '../styles/MainPage.module.scss';

export default () => {
	return (
		<div className={styles.ourColaborators_container}>
			<h1>Nuestros colaboradores son:</h1>
			<div className={styles.colaboratorsList_container}>
				<p>Coca-Cola</p>
				<p>Gobierno de Santa Fe</p>
				<p>Mini de Adri</p>
				<p>MercadoLibre</p>
			</div>
		</div>
	);
};
