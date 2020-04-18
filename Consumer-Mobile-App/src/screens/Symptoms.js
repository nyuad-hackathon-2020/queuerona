import React, { useState, useEffect } from 'react';
import { Slider, Text, StyleSheet, View, Dimensions, Picker, TouchableOpacity } from 'react-native';
import { MenuHeader as Header, StoreHeader } from '../components';
import Colors from '../styles/constants';

export default function Symptoms({ route, navigation }) {
	const { bizID, slot, item } = route.params;
	const [healthPercentage, setPercentage] = useState(50);
	const [basicSymptoms, setSymptoms] = useState(50);
	const [isBlocked, setBlocked] = useState(false);

	useEffect(() => {
		if (basicSymptoms !== 'None' || healthPercentage < 50) {
			setBlocked(true);
		} else {
			setBlocked(false);
		}
	}, [healthPercentage, basicSymptoms]);

	const _NextPage = () => {
		if (!isBlocked) {
			navigation.navigate('Camera', {
				bizID,
				slot,
				item
			});
		}
	};

	return (
		<View style={styles.container}>
			<Header />
			<StoreHeader item={item}></StoreHeader>
			<View style={styles.sectionSeparator}></View>
			<View style={styles.questionContainer}>
				<View style={styles.feelingTextArea}>
					<Text style={styles.feelingText}>How are you feeling today?</Text>
					<Text style={styles.feelingText}>{healthPercentage}%</Text>
				</View>

				<Slider
					step={1}
					minimumValue={1}
					maximumValue={100}
					value={healthPercentage}
					onValueChange={slideValue => setPercentage(slideValue)}
					minimumTrackTintColor={Colors.LIGHT_BLUE}
					maximumTrackTintColor={Colors.WHITE}
					thumbTintColor={Colors.LIGHT_BLUE}
				/>
				<View style={styles.questionSeparator}></View>
				<Text style={styles.feelingText}>Are you feeling any of the following symptoms?</Text>
				<View style={styles.SymptomsPicker}>
					<Picker
						selectedValue={basicSymptoms}
						onValueChange={symptom => setSymptoms(symptom)}
						mode="dropdown"
						style={styles.SymptomsPickerText}>
						<Picker.Item label="Dry Coughs" value="Cough" />
						<Picker.Item label="High Body Temperature" value="Temperature" />
						<Picker.Item label="Nausia" value="Nausia" />
						<Picker.Item label="None of the above" value="None" />
					</Picker>
				</View>
				<TouchableOpacity
					style={{
						...styles.continueButton,
						backgroundColor: isBlocked ? Colors.RED : Colors.LIGHT_BLUE
					}}
					onPress={() => _NextPage()}>
					<Text style={styles.continueButtonText}>
						{isBlocked ? 'Sorry, Your Suspended!' : 'Continue'}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.BLACK,
		width: width,
		height: height
	},
	sectionSeparator: {
		width: width,
		borderColor: Colors.WHITE,
		borderWidth: 0.5,
		marginTop: '5%',
		marginBottom: '10%'
	},
	questionContainer: {
		flex: 1,
		padding: '10%',
		backgroundColor: Colors.BLACK
	},
	feelingTextArea: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	feelingText: {
		color: Colors.WHITE,
		fontFamily: 'SegoeUI',
		fontSize: 18,
		marginBottom: '5%',
		textAlign: 'center'
	},
	SymptomsPicker: {
		backgroundColor: Colors.BLACK,
		color: Colors.WHITE,
		borderColor: Colors.LIGHT_BLUE,
		borderWidth: 2,
		borderRadius: 25
	},
	SymptomsPickerText: {
		marginHorizontal: '10%',
		color: Colors.WHITE
	},
	questionSeparator: {
		borderColor: Colors.WHITE,
		borderWidth: 0.5,
		marginVertical: '15%',
		width: width / 8,
		alignSelf: 'center'
	},
	continueButton: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
		left: 0,
		justifyContent: 'center',
		alignItems: 'center',
		width: width,
		height: height * 0.06
	},
	continueButtonText: {
		color: Colors.WHITE,
		fontFamily: 'SegoeUIBold',
		fontSize: 20
	}
});
