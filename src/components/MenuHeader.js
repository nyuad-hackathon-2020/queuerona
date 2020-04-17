import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function MenuHeader(props) {
	return (
		<View style={styles.container}>
			<Ionicons name="md-menu" size={32} color="white" style={styles.leftSection} />
			<FontAwesome name="user-circle" size={32} color="white" style={styles.rightSection} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		justifyContent: 'space-between',
		alignItems: 'center',
		top: 25,
		left: 0,
		height: '8%',
		width: '100%',
		zIndex: 25
	},
	leftSection: {
		marginLeft: '10%'
	},
	rightSection: {
		marginRight: '10%'
	}
});
