import React, { useRef, useEffect } from 'react';
import { Text, Animated } from 'react-native';
import Colors from '../styles/constants';

export default function FullScreenBackground() {
	const animatedBackground = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		_StartAnimation();
	}, []);

	const _StartAnimation = () => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(
					animatedBackground,
					{
						toValue: 1,
						duration: 10000
					},
					() => {
						Animated.timing(animatedBackground, {
							toValue: 0,
							duration: 10000
						});
					}
				)
			])
		).start();
	};

	const interpolateColor = animatedBackground.interpolate({
		inputRange: [0, 0.5, 1],
		outputRange: [Colors.BLACK, Colors.LIGHT_GREEN, Colors.BLACK]
	});

	return (
		<Animated.View
			style={{
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: interpolateColor
			}}>
			<Text
				style={{
					fontFamily: 'SegoeUIBold',
					fontSize: 24,
					color: Colors.WHITE
				}}>
				RESERVING YOUR PASS....
			</Text>
		</Animated.View>
	);
}
