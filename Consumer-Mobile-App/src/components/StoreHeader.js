import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '../styles/constants';

export default function StoreHeader({ item }) {
	return (
		<>
			<ImageBackground
				source={{ uri: item.background }}
				resizeMode="cover"
				style={styles.backgroundImage}>
				<View style={styles.backgroundImage}></View>
			</ImageBackground>
			<Text style={styles.outletName}>{item.name}</Text>
			<View style={styles.outletInfoSection}>
				<Entypo name="location-pin" size={24} color={Colors.WHITE} />
				<Text style={styles.outletLocation}>{item.location}</Text>
				<Entypo name="location-pin" size={24} color={Colors.WHITE} />
				<Text style={styles.outletLocation}>{item.time}</Text>
			</View>
		</>
	);
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
	backgroundImage: {
		backgroundColor: Colors.HALF_VISIBLE_BLACK,
		width: width,
		height: height * 0.3,
		zIndex: 5
	},
	outletName: {
		color: Colors.WHITE,
		fontSize: 35,
		fontFamily: 'SegoeUIBold',
		marginTop: '2%',
		textAlign: 'center'
	},
	outletInfoSection: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: width,
		textAlign: 'center'
	},
	outletLocation: {
		color: Colors.WHITE,
		fontSize: 18,
		fontFamily: 'SegoeUI',
		textAlign: 'left',
		marginRight: '5%'
	}
});
