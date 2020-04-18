import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera as CameraCapture } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MenuHeader as Header } from '../components';
import Colors from '../styles/constants';

export default function Camera({ route, navigation }) {
	const { bizID, slot, item } = route.params;
	const [hasPermission, setHasPermission] = useState(null);
	const CameraWrapper = useRef(null);

	useEffect(() => {
		(async () => {
			const { status } = await CameraCapture.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const _Snap = async () => {
		if (CameraWrapper) {
			const photo = await CameraWrapper.current.takePictureAsync({ base64: true });
			navigation.navigate('Confirmation', {
				bizID,
				slot,
				item,
				photo
			});
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<Header />
			<CameraCapture
				ref={CameraWrapper}
				style={{ flex: 1 }}
				type={CameraCapture.Constants.Type.front}>
				<InAppCameraButtons _Snap={_Snap} />
			</CameraCapture>
		</View>
	);
}

function InAppCameraButtons({ _Snap }) {
	return (
		<View
			style={{
				flex: 1,
				flexDirection: 'row',
				backgroundColor: 'transparent',
				justifyContent: 'center'
			}}>
			<TouchableOpacity
				style={{
					alignSelf: 'flex-end',
					marginBottom: 50
				}}
				onPress={() => _Snap()}>
				<MaterialCommunityIcons name="flash-circle" size={84} color={Colors.WHITE} />
			</TouchableOpacity>
		</View>
	);
}
