import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Colors from '../styles/constants';

export default function MenuHeader(props) {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.leftSection}>
				<Ionicons name="md-menu" size={32} color={Colors.WHITE} style={styles.leftSection} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.rightSection}>
				<FontAwesome name="user-circle" size={32} color={Colors.WHITE} />
			</TouchableOpacity>
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
		marginLeft: '5%',
		overflow: 'hidden',
		textAlign: 'center'
	},
	rightSection: {
		marginRight: '5%'
	}
});
