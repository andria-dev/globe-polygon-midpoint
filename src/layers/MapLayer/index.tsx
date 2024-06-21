'use client';

import { use, useEffect } from 'react';
import ReactMapboxGl, { MapContext } from 'react-mapbox-gl';

import Coordinates from '@/context/Coordinates';
import MarkerCollection from '@/components/MarkerCollection';

import styles from './index.module.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import proj4 from 'proj4';

const Map = ReactMapboxGl({
	accessToken: 'pk.eyJ1IjoiYW5kcmlhLWRldiIsImEiOiJjbGQ3d3IyNHgxcTNoM3dtcWJheDdnd2duIn0.0VNFol_wLNCBTWsr3l20Bw',
});

function EnableFog({ fog }: { fog: mapboxgl.Fog }) {
	const map = use(MapContext);
	useEffect(() => {
		if (map) map.setFog(fog);
	}, [fog, map]);
	return null;
}

export default function MapLayer() {
	const { points } = use(Coordinates);

	const xycoords = points.features.map((feature) => proj4('EPSG:4326', 'EPSG:3857', feature.geometry.coordinates));

	return (
		<Map style="mapbox://styles/mapbox/dark-v11" containerStyle={{ height: '100vh' }} zoom={[3.5]} center={[0, 0]}>
			<EnableFog
				fog={{
					color: '#353a3e',
					'horizon-blend': 0.01,
					'high-color': '#8f99Bc',
					'space-color': '#000000',
					'star-intensity': 0.3,
				}}
			/>
			<MarkerCollection featureCollection={points} options={{ anchor: 'bottom' }} className={styles.marker}></MarkerCollection>
		</Map>
	);
}
