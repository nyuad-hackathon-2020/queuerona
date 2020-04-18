import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '../styles/constants';

export default function CameraStatus({ reverse, face, qr }) {
	return (
		<TouchableOpacity
			style={{ ...styles.container, backgroundColor: reverse ? Colors.GREEN : Colors.RED }}>
			<View style={styles.leftSection}>
				{reverse ? (
					<Entypo name="ticket" size={32} color={Colors.WHITE} style={styles.leftSection} />
				) : (
					<Entypo
						name="circle-with-cross"
						size={32}
						color={Colors.WHITE}
						style={styles.leftSection}
					/>
				)}
			</View>
			<View style={styles.rightSection}>
				<Text style={styles.text}>
					{reverse
						? face
							? 'FACE DETECTED. GOOD TO GO!'
							: 'QR CODE DETECTED! GOOD TO GO!'
						: 'UNABLE TO DETECT FACE OR QR'}
				</Text>
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
