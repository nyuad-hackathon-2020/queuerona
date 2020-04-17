import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { MenuHeader as Header, MapView, Slider, PanicButton } from '../components';
import Colors from '../styles/constants';

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<Header />
			<MapView />
			<Slider navigation={navigation} />
			<PanicButton />
		</View>
	);
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.BLACK
	}
});
