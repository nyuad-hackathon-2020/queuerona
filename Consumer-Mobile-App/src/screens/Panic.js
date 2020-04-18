import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	ImageBackground
} from 'react-native';
import { MenuHeader as Header, PanicButton as FalseAlarm } from '../components';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import data from '../data/outlets.json';
import Colors from '../styles/constants';

export default function Panic({ navigation }) {
	const _RenderItems = ({ item, index }) => {
		return (
			<TouchableOpacity
				style={styles.slide}
				onPress={() =>
					navigation.navigate('SingleStore', {
						id: item.id,
						item: item
					})
				}>
				<ImageBackground
					source={{ uri: item.logo }}
					resizeMode="contain"
					style={styles.slide}></ImageBackground>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<Header />
			<FontAwesome5 name="first-aid" size={64} style={styles.firstAid} />
			<Text style={styles.InfectedText}>I AM INFECTED!</Text>
			<Text style={styles.AlertText}>SENDING ALERTS{'\n'}TO OTHER CUSTOMERS</Text>
			<MaterialCommunityIcons name="podcast" size={150} style={styles.broadcastIcon} />
			{/* <Slider navigation={navigation} /> */}
			<Text style={styles.slideTextArea}>VISITED STORES</Text>
			<View style={styles.slidesContainer}>
				<Carousel
					data={data}
					renderItem={_RenderItems}
					sliderWidth={width * 0.5}
					itemWidth={width / 2}
				/>
			</View>
			<FalseAlarm reverse navigation={navigation} />
		</View>
	);
}
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.RED,
		alignItems: 'center',
		paddingTop: '20%'
	},
	firstAid: {
		color: Colors.WHITE,
		flex: 2
	},
	InfectedText: {
		flex: 1,
		color: Colors.WHITE,
		fontSize: 24,
		fontFamily: 'SegoeUIBold',
		textAlign: 'center'
	},
	AlertText: {
		flex: 2,
		color: Colors.WHITE,
		fontSize: 30,
		fontFamily: 'SegoeUIBold',
		textAlign: 'center'
	},
	broadcastIcon: {
		color: Colors.WHITE,
		flex: 4
	},
	slidesContainer: {
		flex: 3,
		flexDirection: 'row',
		justifyContent: 'center',
		width: width - 10
	},
	slide: {
		width: '100%',
		height: '100%',
		backgroundColor: Colors.WHITE,
		borderRadius: 25,
		overflow: 'hidden'
	},
	slideTextArea: {
		flex: 1,
		color: Colors.WHITE,
		textAlign: 'left',
		fontFamily: 'SegoeUIBold',
		fontSize: 30,
		marginTop: '3%'
	}
});
