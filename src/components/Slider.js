import React from 'react';
import { StyleSheet, View, Dimensions, Text, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import data from '../data/outlets.json';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Slider() {
	const _RenderItems = ({ item, index }) => {
		return (
			<TouchableOpacity style={styles.slide}>
				<ImageBackground
					source={{ uri: item.logo }}
					resizeMode="contain"
					style={styles.slide}
					onPress={() =>
						navigation.navigate('SingleStore', {
							id: item.id,
							item: item
						})
					}></ImageBackground>
			</TouchableOpacity>
		);
	};

	return (
		<>
			<Text style={styles.textArea}>NEARBY STORES</Text>
			<View style={styles.container}>
				<Carousel
					data={data}
					renderItem={_RenderItems}
					sliderWidth={width * 0.5}
					itemWidth={width / 2}
				/>
			</View>
		</>
	);
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 80,
		zIndex: 15,
		height: height * 0.25,
		width: width - 10
	},
	slide: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
		borderRadius: 25,
		overflow: 'hidden'
	},
	textArea: {
		color: 'white',
		bottom: height * 0.25 + 135,
		left: 10,
		textAlign: 'left',
		fontFamily: 'SegoeUIBold',
		fontSize: 30,
		zIndex: 15
	}
});
