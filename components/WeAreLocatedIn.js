import styles from '../styles/WhereToFindUs.module.scss';
import React, { useRef, useEffect, useState } from 'react';
import companyLocation from '../text/companyLocation.json';
import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken =
	'pk.eyJ1IjoibHVjYXNwZW5uaWNlIiwiYSI6ImNreHJvbjU1NDRwY2MybnB6OTYwczFsdnEifQ.AI081v4O_daf6vZS8utibA';
const WeAreLocatedIn = () => {
	const { latitude, longitude, zoomLevel, mapsLink } = companyLocation;
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(longitude);
	const [lat, setLat] = useState(latitude);
	const [zoom, setZoom] = useState(zoomLevel);

	useEffect(() => {
		if (map.current) return;
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom,
		});
	});
	return (
		<div
			className={`${styles.weAreLocated_container} lightGrayBg`}
			id="dondeEncontrarnos"
		>
			<h1 className={styles.weAreLocated_title}>Done Encontrarnos</h1>
			<div className={styles.mapAndText_container}>
				<div ref={mapContainer} className={styles.map_container} />
				<div className={styles.text_container}>
					<h2>
						Dirección: <span>FakeDir</span>
					</h2>
					<h2>
						Teléfono: <span>FakeDir</span>
					</h2>
					<h2>
						Email: <span>FakeDir</span>
					</h2>
					<h2>
						Como Llegar:
						<span>
							<a target="_blank" href={mapsLink}>
								asdasd
							</a>
						</span>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default WeAreLocatedIn;
