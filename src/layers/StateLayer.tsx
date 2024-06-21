'use client';

import { useImmerReducer } from 'use-immer';
import { Draft } from 'immer';

import Coordinates, { CoordinatesDispatch } from '@/context/Coordinates';
import type { CoordinatesAction, CoordinatesState } from '@/context/Coordinates';
import MapLayer from '@/layers/MapLayer';

interface Props {
	points: GeoJSON.FeatureCollection<GeoJSON.Point>;
}

function reducer(draft: Draft<CoordinatesState>, action: CoordinatesAction) {
	switch (action.type) {
		case 'ADD_FEATURE':
			draft.points.features.push(action.payload);
			break;
		case 'IMPORT_FEATURE_COLLECTION':
			draft.points = action.payload;
			break;
		case 'REMOVE_FEATURE':
			draft.points.features = draft.points.features.filter((feature) => feature !== action.payload);
			break;
		case 'REMOVE_ALL_FEATURES':
			draft.points.features = [];
			break;
	}
	return draft;
}

export default function StateLayer({ points }: Props) {
	const [state, dispatch] = useImmerReducer<CoordinatesState, CoordinatesAction>(reducer, { points });

	return (
		<Coordinates.Provider value={state}>
			<CoordinatesDispatch.Provider value={dispatch}>
				<MapLayer />
			</CoordinatesDispatch.Provider>
		</Coordinates.Provider>
	);
}
