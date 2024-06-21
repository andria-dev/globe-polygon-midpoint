import StateLayer from '@/layers/StateLayer';
const initialPoints = require('@/data/initial-points.geojson');

export default function Home() {
	return (
		<>
			<StateLayer points={initialPoints} />
			<form></form>
		</>
	);
}
