import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import MapStyle from '../styles/GoogleMaps.json';

export default function Maps() {
	const _InitialRegion = () => {
		return {
			latitude: 25.2048,
			longitude: 55.2708,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421
		};
	};

	return (
		<MapView
			initialRegion={_InitialRegion()}
			style={styles.mapStyle}
			customMapStyle={MapStyle}
			showsCompass={false}>
			<Marker coordinate={{ latitude: 25.2048, longitude: 55.2708 }}>
				<EvilIcons name="location" size={124} color="yellow" />
			</Marker>
		</MapView>
	);
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center'
	},
	mapStyle: {
		width: width,
		height: height
	}
});
