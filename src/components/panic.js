import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';

export default function PanicButton(props) {
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.leftSection}>
				<Foundation name="first-aid" size={32} color="white" style={styles.leftSection} />
			</View>
			<View style={styles.rightSection}>
				<Text style={styles.text}>HELP! I AM INFECTED!</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		bottom: 0,
		left: 0,
		height: '8%',
		width: '100%',
		zIndex: 25,
		backgroundColor: 'red'
	},
	leftSection: {
		marginLeft: '5%',
		overflow: 'hidden',
		textAlign: 'center'
	},
	rightSection: {
		marginRight: '5%'
	},
	text: {
		color: 'white',
		fontFamily: 'SegoeUIBold',
		fontSize: 18
	}
});
