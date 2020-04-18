import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import {
	MenuHeader as Header,
	StoreHeader as StoreInfo,
	FullScreenBackground as LoadingScreen
} from '../components';
import { RESERVE_AVAILABLE_TICKET } from '../utils/API';
import Colors from '../styles/constants';

export default function Confirmation({ route, navigation }) {
	const { bizID, slot, item, photo } = route.params;
	const [isConfirmed, setConfirmation] = useState(false);
	const [SlotText, setSlotText] = useState(false);

	useEffect(() => {
		async function REVERSE_TICKET_API() {
			const res = await RESERVE_AVAILABLE_TICKET(bizID, slot);
			setTimeout(() => setConfirmation(true), 1000);
		}
		REVERSE_TICKET_API();
	}, [bizID, slot]);

	useEffect(() => {
		if (slot === 1) {
			setSlotText('10AM\n-12PM');
		} else if (slot === 2) {
			setSlotText('12PM\n-2PM');
		} else {
			setSlotText('2PM\n-4PM');
		}
	}, [slot]);

	return isConfirmed ? (
		<View style={styles.container}>
			<Header />
			<StoreInfo item={item} />
			<View style={styles.sectionSeparator}></View>
			<View style={styles.passContainer}>
				<Text style={styles.confirmationHeader}>ENTRY PERMIT</Text>
				<View style={styles.userInfoSection}>
					<Image source={{ uri: photo.uri }} style={styles.userAvatar} />
					<Text style={styles.userName}>Lavesh{'\n'}Panjwani</Text>
				</View>
				<View style={styles.miniLineSeparator}></View>
				<View style={styles.permitInfoSection}>
					<Image
						source={{
							uri: 'https://i.pinimg.com/originals/a8/69/40/a86940a4ed8a69539b341f3c414c47b3.png'
						}}
						style={styles.permitQR}
					/>
					<Text style={styles.userName}>{SlotText}</Text>
				</View>
			</View>
		</View>
	) : (
		<LoadingScreen />
	);
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.BLACK
	},
	sectionSeparator: {
		width: width,
		borderColor: Colors.WHITE,
		borderWidth: 0.5,
		marginVertical: '5%'
	},
	passContainer: {
		flex: 1,
		backgroundColor: Colors.BLACK,
		alignItems: 'center',
		textAlign: 'center'
	},
	confirmationHeader: {
		color: Colors.LIGHT_GREEN,
		fontFamily: 'SegoeUIBold',
		fontSize: 28,
		textAlign: 'center'
	},
	userInfoSection: {
		marginVertical: '5%',
		height: '30%',
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	userAvatar: {
		width: '30%',
		height: '80%',
		borderRadius: 100
	},
	userName: {
		color: Colors.WHITE,
		fontFamily: 'SegoeUIBold',
		fontSize: 28,
		textAlign: 'center'
	},
	permitInfoSection: {
		width: '80%',
		height: '50%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	permitQR: {
		width: '50%',
		height: '70%',
		backgroundColor: 'white'
	},
	miniLineSeparator: {
		borderColor: Colors.WHITE,
		borderWidth: 0.5,
		marginVertical: '1%',
		width: width / 8,
		alignSelf: 'center'
	}
});
