import { Dispatch, createContext } from 'react';

export interface CoordinatesState {
	points: GeoJSON.FeatureCollection<GeoJSON.Point>;
}
export default createContext<CoordinatesState>({
	points: {
		type: 'FeatureCollection',
		features: [],
	},
});

export type CoordinatesAction =
	| { type: 'ADD_FEATURE'; payload: GeoJSON.Feature<GeoJSON.Point> }
	| { type: 'IMPORT_FEATURE_COLLECTION'; payload: GeoJSON.FeatureCollection<GeoJSON.Point> }
	| { type: 'REMOVE_FEATURE'; payload: GeoJSON.Feature<GeoJSON.Point> }
	| { type: 'REMOVE_ALL_FEATURES' };
export const CoordinatesDispatch = createContext<Dispatch<CoordinatesAction>>(() => {});
