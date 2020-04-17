import React from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { Home } from './src/screens';
import FetchFonts from './src/utils/Fonts';
// import store from './src/utils/Redux';

const Stack = createStackNavigator();

export default function App() {
	const [fontsLoaded] = FetchFonts();

	return fontsLoaded ? (
		// <Provider store={store}>
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false
				}}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="SingleStore" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	) : (
		// </Provider>
		<AppLoading />
	);
}
