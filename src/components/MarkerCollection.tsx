import { DetailedHTMLProps, HTMLAttributes } from 'react';
import Marker, { MarkerProps } from './Marker';

interface MarkerCollectionProps {
	featureCollection: GeoJSON.FeatureCollection<GeoJSON.Point>;
}

export default function MarkerCollection({
	featureCollection,
	...props
}: MarkerCollectionProps & Omit<MarkerProps, 'feature'> & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
	return featureCollection.features.map((feature) => <Marker key={feature.id ?? feature.properties?.name} feature={feature} {...props} />);
}
