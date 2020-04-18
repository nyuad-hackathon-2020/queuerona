import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera as CameraCapture } from 'expo-camera';
import { Feather } from '@expo/vector-icons';
import { MenuHeader as Header, CameraStatus as StatusIndicator } from '../components';
import * as FaceDetector from 'expo-face-detector';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Colors from '../styles/constants';

export default function Camera({ route, navigation }) {
	const [hasPermission, setHasPermission] = useState(null);
	const [isFaceDetected, setFaceDetected] = useState(false);
	const [isBarcodeScanned, setBarcodeScanned] = useState(false);
	const [ScannedBarcodes, setScannedBarcodes] = useState([]);
	const [CameraSide, setCameraSide] = useState(CameraCapture.Constants.Type.back);
	const CameraWrapper = useRef(null);

	useEffect(() => {
		(async () => {
			const { status } = await CameraCapture.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	useEffect(() => {
		if (isBarcodeScanned) {
			setTimeout(() => {
				setBarcodeScanned(false);
			}, 5000);
		}
	}, [isBarcodeScanned]);

	const _ChangeCameraSide = () => {
		setCameraSide(side =>
			side === CameraCapture.Constants.Type.back
				? CameraCapture.Constants.Type.front
				: CameraCapture.Constants.Type.back
		);
		_ResetState();
	};

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const _FaceDetected = ({ faces }) => {
		if (faces.length > 0) {
			setFaceDetected(true);
		} else {
			setFaceDetected(false);
		}
	};

	const _BarcodeScanner = barcode => {
		if (barcode.type === BarCodeScanner.Constants.BarCodeType.qr) {
			setBarcodeScanned(true);
		}
	};

	const _ResetState = () => {
		setFaceDetected(false);
		setBarcodeScanned(false);
	};

	return (
		<View style={{ flex: 1 }}>
			<Header />
			<CameraCapture
				ref={CameraWrapper}
				style={{ flex: 1 }}
				type={CameraSide}
				onFacesDetected={face => _FaceDetected(face)}
				onBarCodeScanned={barcode => _BarcodeScanner(barcode)}
				faceDetectorSettings={{
					mode: FaceDetector.Constants.Mode.accurate,
					detectLandmarks: FaceDetector.Constants.Landmarks.none,
					runClassifications: FaceDetector.Constants.Classifications.all,
					minDetectionInterval: 1000,
					tracking: false
				}}>
				<InAppCameraButtons _ClickAction={_ChangeCameraSide} />
			</CameraCapture>
			<StatusIndicator
				reverse={isFaceDetected || isBarcodeScanned}
				face={isFaceDetected}
				qr={isBarcodeScanned}
			/>
		</View>
	);
}

function InAppCameraButtons({ _ClickAction }) {
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
					marginBottom: 80
				}}
				onPress={() => _ClickAction()}>
				<Feather name="compass" size={84} color={Colors.WHITE} />
			</TouchableOpacity>
		</View>
	);
}
