import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { MenuHeader as Header, MapView } from '../components';

export default function Home() {
	return (
		<View style={styles.container}>
			<Header />
			<MapView />
		</View>
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
