import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../styles/constants';

export default function PanicButton({ navigation, reverse }) {
	const _Redirect = () => {
		if (reverse) {
			navigation.goBack();
		} else {
			navigation.navigate('Panic');
		}
	};

	return (
		<TouchableOpacity
			style={{ ...styles.container, backgroundColor: reverse ? Colors.GREEN : Colors.RED }}
			onPress={() => _Redirect()}>
			<View style={styles.leftSection}>
				{reverse ? (
					<MaterialCommunityIcons
						name="glass-cocktail"
						size={32}
						color={Colors.WHITE}
						style={styles.leftSection}
					/>
				) : (
					<Foundation name="first-aid" size={32} color={Colors.WHITE} style={styles.leftSection} />
				)}
			</View>
			<View style={styles.rightSection}>
				<Text style={styles.text}>{reverse ? 'FALSE ALARM!' : 'HELP! I AM INFECTED!'}</Text>
			</View>
		</TouchableOpacity>
	);
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		bottom: 0,
		left: 0,
		height: height * 0.08,
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
	},
	text: {
		color: Colors.WHITE,
		fontFamily: 'SegoeUIBold',
		fontSize: 18
	}
});
