import { DetailedHTMLProps, HTMLAttributes, use, useEffect, useRef } from 'react';
import { MapContext } from 'react-mapbox-gl';
import mapboxgl, { MarkerOptions } from 'mapbox-gl';

export interface MarkerProps {
	feature: GeoJSON.Feature<GeoJSON.Point>;
	options?: MarkerOptions;
}

export default function Marker({ feature, options = {}, ...props }: MarkerProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
	const map = use(MapContext);
	const div = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (map && div.current) {
			new mapboxgl.Marker(div.current, options).setLngLat(feature.geometry.coordinates as [number, number]).addTo(map);
		}
	}, [feature.geometry.coordinates, map, options]);

	return <div ref={div} {...props}></div>;
}
