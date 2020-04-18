import React from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Camera } from './src/screens';
import FetchFonts from './src/utils/Fonts';

const Stack = createStackNavigator();

export default function App() {
	const [fontsLoaded] = FetchFonts();

	return fontsLoaded ? (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false
				}}>
				<Stack.Screen name="Camera" component={Camera} />
			</Stack.Navigator>
		</NavigationContainer>
	) : (
		<AppLoading />
	);
}
