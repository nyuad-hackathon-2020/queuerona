import React, { useState } from 'react';
import * as Font from 'expo-font';

const fontsMap = {
	SegoeUI: require('../../assets/fonts/Segoe-UI.ttf'),
	SegoeUIBold: require('../../assets/fonts/Segoe-UI-Bold.ttf')
};

export default function useFonts() {
	let [fontsLoaded, setFontsLoaded] = useState(false);
	(async () => {
		await Font.loadAsync(fontsMap);
		setFontsLoaded(true);
	})();
	return [fontsLoaded];
}
