import React from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, SingleStore, Camera, Symptoms, Confirmation, Panic } from './src/screens';
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
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="SingleStore" component={SingleStore} />
				<Stack.Screen name="Camera" component={Camera} />
				<Stack.Screen name="Symptoms" component={Symptoms} />
				<Stack.Screen name="Confirmation" component={Confirmation} />
				<Stack.Screen name="Panic" component={Panic} />
			</Stack.Navigator>
		</NavigationContainer>
	) : (
		<AppLoading />
	);
}
