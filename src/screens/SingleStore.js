import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { MenuHeader as Header, StoreHeader } from '../components';
import { FETCH_AVAILABLE_TICKETS } from '../utils/API';
import Colors from '../styles/constants';

export default function SingleStore({ route, navigation }) {
	const { id, item } = route.params;
	const [tickets, setTickets] = useState(false);

	useEffect(() => {
		async function FETCH_TICKET_API() {
			const response = await FETCH_AVAILABLE_TICKETS(id);
			setTickets(response);
		}

		FETCH_TICKET_API();
	}, [id]);

	const _NextStage = slot => {
		navigation.navigate('Symptoms', {
			bizID: id,
			slot: slot,
			item: item
		});
	};

	const _AvailableTicketColor = number => {
		if (number < 6) {
			return 'red';
		} else if (number >= 6 && number < 8) {
			return '#e5e619';
		} else if (number >= 8) {
			return 'green';
		}
	};

	return (
		<View style={styles.container}>
			<Header />
			<StoreHeader item={item} />
			<View style={styles.ticketArea}>
				<TouchableOpacity style={styles.SingleTicket} onPress={() => _NextStage(1)}>
					<Text style={styles.TicketSlotNumber}>SLOT 1:</Text>
					<Text style={styles.TicketSlotNumber}>10am - 12pm</Text>

					<View
						style={{
							...styles.AvailableCount,
							backgroundColor: _AvailableTicketColor(tickets['10-12'] ? tickets['10-12'] : 0)
						}}>
						<Text style={styles.AvailableCountText}>{tickets['10-12'] ? tickets['10-12'] : 0}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.SingleTicket} onPress={() => _NextStage(2)}>
					<Text style={styles.TicketSlotNumber}>SLOT 2:</Text>
					<Text style={styles.TicketSlotNumber}>12pm - 2pm</Text>

					<View
						style={{
							...styles.AvailableCount,
							backgroundColor: _AvailableTicketColor(tickets['12-2'] ? tickets['12-2'] : 0)
						}}>
						<Text style={styles.AvailableCountText}>{tickets['12-2'] ? tickets['12-2'] : 0}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.SingleTicket} onPress={() => _NextStage(3)}>
					<Text style={styles.TicketSlotNumber}>SLOT 3:</Text>
					<Text style={styles.TicketSlotNumber}>2pm - 4pm</Text>

					<View
						style={{
							...styles.AvailableCount,
							backgroundColor: _AvailableTicketColor(tickets['2-4'] ? tickets['2-4'] : 0)
						}}>
						<Text style={styles.AvailableCountText}>{tickets['2-4'] ? tickets['2-4'] : 0}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.BLACK
	},
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
	},
	ticketArea: {
		flex: 1,
		flexDirection: 'column',
		marginTop: '8%'
	},
	SingleTicket: {
		flex: 1,
		margin: '3%',
		borderWidth: 2,
		borderColor: Colors.LIGHT_BLUE,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center'
	},
	TicketSlotNumber: {
		color: Colors.WHITE,
		textAlign: 'center',
		fontFamily: 'SegoeUIBold',
		fontSize: 24,
		marginLeft: '-10%'
	},
	AvailableCount: {
		position: 'absolute',
		height: '100%',
		width: '12%',
		justifyContent: 'center',
		right: 0,
		backgroundColor: 'red',
		borderTopEndRadius: 22,
		borderBottomRightRadius: 22
	},
	AvailableCountText: {
		color: Colors.WHITE,
		textAlign: 'center',
		fontSize: 20
	}
});
